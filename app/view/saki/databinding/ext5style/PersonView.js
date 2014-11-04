/*
 * File: app/view/saki/databinding/ext5style/PersonView.js
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

Ext.define('ext5.view.saki.databinding.ext5style.PersonView', {
    extend: 'Ext.view.View',
    alias: 'widget.sakidatabindingext5stylepersonview',

    requires: [
        'ext5.view.saki.databinding.ext5style.PersonViewViewModel',
        'Ext.XTemplate'
    ],

    config: {
        currentPerson: null
    },

    viewModel: {
        type: 'sakidatabindingext5stylepersonview'
    },
    publishes: [
        'currentPerson'
    ],
    itemSelector: 'div.person-item',
    itemTpl: [
        '<div class="person-item">',
        '<strong>{fname} {lname}</strong> ({age}) ',
        '</div>'
    ],
    selectedItemCls: 'selected',

    initConfig: function(instanceConfig) {
        var me = this,
            config = {};
        me.processSakidatabindingext5stylePersonView(config);
        if (instanceConfig) {
            me.getConfigurator().merge(me, config, instanceConfig);
        }
        return me.callParent([config]);
    },

    processSakidatabindingext5stylePersonView: function(config) {
        Ext.apply(config, {
            listeners: {
                scope: 'this',
                select: 'onPersonSelect'
            }
        });
    },

    updateCurrentPerson: function(current, previous) {
        var sm = this.getSelectionModel();
        if(current){
            sm.select(current);
        }
        if(previous){
            sm.deselect(previous);
        }
    },

    onPersonSelect: function(view,person) {
        this.setCurrentPerson(person);
    }

});