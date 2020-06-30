import { Injectable } from '@angular/core';
import { AlertController, ActionSheetController, ToastController } from '@ionic/angular';
import * as $ from 'jquery';
@Injectable({
    providedIn: 'root'
})
export class PmEntryService {

    constructor(
        public toastController: ToastController
    ) { }

    analysisPmEntry(pmentry) {
        let list = [];
        console.log('pmentry', pmentry);
        for (const el of $(pmentry)[0].children) {
            list = list.concat(this.getPmMenu(0, $(el)[0]));
        }
        console.log(list);
        return list;
    }
    getPmMenu(level, source) {
        let that = this;
        let pmEntryTitle = '';
        let menuList = [];
        let childrenList = [];
        for (const el of $(source)[0].children) {
            console.log('$(el)[0]', $(el)[0]);
            switch ($(el)[0].localName) {
                case 'pmEntryTitle':
                    level = level + 1;
                    pmEntryTitle = $(el)[0].textContent;
                    break;
                case 'dmRef':
                    if ($(el)[0].attributes.getNamedItem('xlink:href') && $(el)[0].attributes.getNamedItem('xlink:href').textContent) {
                        childrenList.push({ level: level + 1, title: $(el)[0].attributes.getNamedItem('xlink:title').textContent, hrefxml: $(el)[0].attributes.getNamedItem('xlink:href').textContent });
                    } else {
                        childrenList.push({ level: level + 1, title: this.analysisDmRef($(el)[0]).dmTitle, hrefxml: this.analysisDmRef($(el)[0]).dmCode });
                    }
                    break;
                case 'pmEntry':
                    childrenList = childrenList.concat(this.getPmMenu(level, $(el)[0]));
                    break;
            }
        }
        menuList.push({level: level, title: pmEntryTitle, children: childrenList});
        return menuList;
    }

    analysisDmRef(source) {
        let title;
        let code;
        for (const el of $(source)[0].children) {
            switch ($(el)[0].localName) {
                case 'dmRefIdent':
                    code = this.analysisDmRefIdent($(el)[0]);
                break;
                case 'dmRefAddressItems':
                    title = this.analysisDmRefAddressItems($(el)[0]);
            }
        }
        return { dmTitle: title, dmCode: code };
    }

    analysisDmRefIdent(source) {
        return 'xml';
    }

    analysisDmRefAddressItems(source) {
        let title;
        for (const el of $(source)[0].children) {
            switch ($(el)[0].localName) {
                case 'dmTitle':
                    title = $(el)[1].textContent;
                break;
                case 'issueDate':
                break;
            }
        }
        return title;
    }
}
