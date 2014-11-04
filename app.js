/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.state.CookieProvider',
        'ext5.store.Navigation',
        'Ext.window.MessageBox'
    ],
    stores: [
        'Navigation'
    ],
    views: [
        'main.Main',
        'Header',
        'TopMenu',
        'ContentPanel',
        'navigation.Breadcrumb',
        'navigation.Tree',
        'CodePreview',
        'CodeContent',
        'chapter1.HelloWorld',
        'saki.databinding.ext5style.MainView',
        'saki.databinding.ext5style.PersonGrid',
        'saki.databinding.ext5style.PersonView',
        'saki.databinding.ext5style.PersonForm',
        'MyPanel1'
    ],
    controllers: [
        'Root',
        'saki.databinding.ext4style.MainController'
    ],
    glyphFontFamily: 'Pictos',
    name: 'ext5',

    init: function() {
        var me = this;

        me.setDefaultToken('framedashboard');

        Ext.tip.QuickTipManager.init();
        Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
    },

    launch: function() {
        Ext.create('ext5.view.main.Main');
    }

});
