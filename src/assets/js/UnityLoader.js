if (!UnityLoader.__instantiate) {
    UnityLoader.__instantiate = UnityLoader.instantiate;

    UnityLoader.instantiate = function (container, url, override) {
        if (!override)
            override = {};

        if (!override.onProgress)
            override.onProgress = function (instance, progress) {
                console.log(instance.container.id + ": " + Math.round(progress * 100) + "%");
            };
        if (!override.compatibilityCheck)
            override.compatibilityCheck = function (unityInstance, onsuccess, onerror) {
                if (!UnityLoader.SystemInfo.hasWebGL) {
                    unityInstance.popup("Your browser does not support WebGL",
                        [{ text: "OK", callback: onerror }]);
                } else {
                    onsuccess();
                }
            };

        var instance = this.__instantiate(container, url, override);

        instance.Quit = instance.Quit || function (arg) {
            this.SendMessage("UnityLoader", "QuitApplication", 0);
        };

        instance.SetRunInBackground = function (flag) {
            this.SendMessage("UnityLoader", "SetRunInBackground", flag ? 1 : 0);
        };

        instance.SetMainCameraActive = function (flag) {
            this.SendMessage("UnityLoader", "SetMainCameraActive", flag ? 1 : 0);
        };

        instance.SetVisible = function (flag) {
            if (flag) {
                this.container.style.display = 'block';
                this.SetMainCameraActive(true);
            } else {
                this.SetMainCameraActive(false);
                this.container.style.display = 'none';
            }
        };

        instance.LoadDefaultScene = function () {
            this.SendMessage("UnityLoader", "LoadDefaultScene");
        };

        instance.LoadScene = function (name) {
            this.SendMessage("UnityLoader", "LoadScene", name);
        };

        instance.LoadSceneAdditive = function (name) {
            this.SendMessage("UnityLoader", "LoadSceneAdditive", name);
        };

        instance.LoadSceneFromAssetBundle = function (url) {
            this.LoadDefaultScene();
            this.SendMessage("UnityLoader", "LoadSceneFromAssetBundle", url);
        };

        instance.UnloadLastAssetBundle = function (unloadAllObjects) {
            this.SendMessage("UnityLoader", "UnloadLastAssetBundle", unloadAllObjects ? 1 : 0);
        };

        instance.CaptureAllKeyboardInput = function (capture) {
            this.SendMessage("UnityLoader", "CaptureAllKeyboardInput", capture ? 1 : 0);
        };

        var tabindex = override.tabindex ? ("" + override.tabindex) : "-1";
        instance.MakeCanvasFocusable = function () {
            var canvas = this.container.firstChild;
            if (canvas && canvas.getAttribute("tabindex") == null) {
                canvas.setAttribute("tabindex", tabindex);
                canvas.focus();
            }

            return tabindex != "-1";
        };

        instance.AppendToNode = function (node) {
            $(node).append(this.container);
        };

        instance.PrependToNode = function (node) {
            $(node).prepend(this.container);
        };

        return instance;
    }
}
