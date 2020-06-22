const UTILS = {
    str2label(name) {
        let result = '';
        if (!name.charAt(0).match(/[A-Z]+/)) {
            let names = name.split(/[A-Z]+/);
            names.forEach((item, index) => {
                if (index > 0) {
                    let strlength = 0;
                    for (let i = index; i > 0; i--) {
                        strlength += names[i - 1].length;
                    }
                    let str = name.substring(strlength, strlength + 1);
                    names[index] = str + item;
                    result += '-' + names[index].toLowerCase();
                }else {
                    result = names[index].toLowerCase();
                }
            });
        }else {
            result = name.toLowerCase();
        }
        return result;
    },
    strFirst2Uppercase(str) {
      const component =  str.replace(str[0], str[0].toUpperCase()) + 'Component';
      return UTILS.componentExist(component);
    },

  /**
   * 根据字段排序 从大到小
   * @param name 
   */
  sortBy(name) {
    return (o, p) => {
        let a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a > b ? -1 : 1;
            }
            return typeof a > typeof b ? -1 : 1;
        } else {
            console.log('error');
        }
    }
},

    componentExist(name) {
        const importComs = ['AccessPointRefComponent', 'AcronymComponent', 'AcronymDefinitionComponent', 'AcronymTermComponent', 'ActionComponent',
    'DmoduleComponent', 'ContentComponent'];
        if (importComs.findIndex(t => t === name) > -1) {
            return name;
        } else {
            return 'DisplacementComponent';
        }
    }
}


export { UTILS }