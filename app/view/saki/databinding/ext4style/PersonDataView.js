/*
 * File: app/view/saki/databinding/ext4style/PersonDataView.js
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

Ext.define('ext5.view.saki.databinding.ext4style.PersonDataView', {
    extend: 'Ext.view.View',
    alias: 'widget.persondataview',

    requires: [
        'ext5.view.saki.databinding.ext4style.PersonDataViewViewModel',
        'Ext.XTemplate'
    ],

    viewModel: {
        type: 'sakidatabindingext4stylepersondataview'
    },
    autoScroll: true,
    height: 250,
    width: 400,
    itemSelector: 'div.person-item',
    itemTpl: [
        '<div class="person-item">',
        '<strong>{fname} {lname}</strong> ({age}) ',
        '</div>'
    ],
    store: 'saki.databinding.ext4style.PersonStore',

    initComponent: function() {
        var b = this, a = {};
        Ext.apply(a, {
        //     store: Ext.getStore("PersonStore"),
            itemSelector: "div.person-item",

            listeners: {
                scope: b,
                selectionchange: "onSelectionChange"
            },
            selModel: {allowDeselect: true}
        });
        Ext.apply(b, a);
        b.callParent(arguments);
    },

    onSelectionChange: function(a,c,b) {
        this.fireEvent("itemselectionchange", this, c, b);
    }

});