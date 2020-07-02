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
        console.log('pmentry', $(pmentry)[0]);
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
            switch ($(el)[0].localName) {
                case 'pmEntryTitle':
                    level = level + 1;
                    pmEntryTitle = $(el)[0].textContent ? $(el)[0].textContent : '技术手册';
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
        if (pmEntryTitle) {
            menuList.push({level: level, title: pmEntryTitle, children: childrenList});
        } else {
            menuList = childrenList;
        }
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
        let code;
        let issueInfo;
        let language;
        for (const el of $(source)[0].children) {
            switch ($(el)[0].localName) {
                case 'dmCode':
                    const modelIdentCode = $(el)[0].attributes.getNamedItem('modelIdentCode') ? $(el)[0].attributes.getNamedItem('modelIdentCode').textContent : '';
                    const systemDiffCode = $(el)[0].attributes.getNamedItem('systemDiffCode') ? $(el)[0].attributes.getNamedItem('systemDiffCode').textContent : '';
                    const systemCode = $(el)[0].attributes.getNamedItem('systemCode') ? $(el)[0].attributes.getNamedItem('systemCode').textContent : '';
                    const subSystemCode = $(el)[0].attributes.getNamedItem('subSystemCode') ? $(el)[0].attributes.getNamedItem('subSystemCode').textContent : '';
                    const subSubSystemCode = $(el)[0].attributes.getNamedItem('subSubSystemCode') ? $(el)[0].attributes.getNamedItem('subSubSystemCode').textContent : '';
                    const assyCode = $(el)[0].attributes.getNamedItem('assyCode') ? $(el)[0].attributes.getNamedItem('assyCode').textContent : '';
                    const disassyCode = $(el)[0].attributes.getNamedItem('disassyCode') ? $(el)[0].attributes.getNamedItem('disassyCode').textContent : '';
                    const disassyCodeVariant = $(el)[0].attributes.getNamedItem('disassyCodeVariant') ? $(el)[0].attributes.getNamedItem('disassyCodeVariant').textContent : '';
                    const infoCode = $(el)[0].attributes.getNamedItem('infoCode') ? $(el)[0].attributes.getNamedItem('infoCode').textContent : '';
                    const infoCodeVariant = $(el)[0].attributes.getNamedItem('infoCodeVariant') ? $(el)[0].attributes.getNamedItem('infoCodeVariant').textContent : '';
                    const itemLocationCode = $(el)[0].attributes.getNamedItem('itemLocationCode') ? $(el)[0].attributes.getNamedItem('itemLocationCode').textContent : '';
                    code = 'DMC-' + modelIdentCode + '-' + systemDiffCode + '-' + systemCode + '-' + subSystemCode + subSubSystemCode + '-' + assyCode + '-' + disassyCode + disassyCodeVariant + '-' + infoCode + infoCodeVariant + '-' + itemLocationCode;
                break;
                case 'issueInfo':
                    const issueNumber = $(el)[0].attributes.getNamedItem('issueNumber') ? $(el)[0].attributes.getNamedItem('issueNumber').textContent : '';
                    const inWork = $(el)[0].attributes.getNamedItem('inWork') ? $(el)[0].attributes.getNamedItem('inWork').textContent : '';
                    issueInfo = issueNumber + '-' + inWork;
                break;
                case 'language':
                    const languageIsoCode = $(el)[0].attributes.getNamedItem('languageIsoCode') ? $(el)[0].attributes.getNamedItem('languageIsoCode').textContent : '';
                    const countryIsoCode = $(el)[0].attributes.getNamedItem('countryIsoCode') ? $(el)[0].attributes.getNamedItem('countryIsoCode').textContent : '';
                    language = languageIsoCode + '-' + countryIsoCode;
                break;
                default: break;
            }
        }
        return code + '_' + issueInfo + '_' + language + '.XML';
    }

    analysisDmRefAddressItems(source) {
        let title;
        for (const el of $(source)[0].children) {
            switch ($(el)[0].localName) {
                case 'dmTitle':
                    title = $(el)[0].children[1].textContent;
                break;
                case 'issueDate':
                break;
            }
        }
        return title;
    }
}
