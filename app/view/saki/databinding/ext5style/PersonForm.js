/*
 * File: app/view/saki/databinding/ext5style/PersonForm.js
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

Ext.define('ext5.view.saki.databinding.ext5style.PersonForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.personform',

    requires: [
        'ext5.view.saki.databinding.ext5style.PersonFormViewModel',
        'Ext.form.field.Number'
    ],

    config: {
        currentPerson: null
    },

    viewModel: {
        type: 'sakidatabindingext5stylepersonform'
    },
    defaults: {
        anchor: '100%',
        selectOnFocus: true
    },
    bodyPadding: 10,
    header: {
        title: 'Person Form--saki...00',
        padding: '4 9 5 9',
        items: [
            {
                text: 'Reject',
                xtype: 'button',
                itemId: 'reject',
                handler: 'onFormButton',
                glyph: 0xf0e2,
                disabled: true,
                bind: {
                    disabled: '{!dirty}'
                }
            },
            {
                text: 'Commit',
                xtype: 'button',
                itemId: 'commit',
                handler: 'onFormButton',
                glyph: 0xf00c,
                margin: '0 0 0 5',
                disabled: true,
                bind: {
                    disabled: '{!dirty}'
                }
            }
        ]
    },

    bind: {
        currentPerson: '{currentPerson}',
        title: '<b>{currentPerson.name}</b>'
    },
    items: [
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'First Name',
            bind: {
                disabled: '{!currentPerson}',
                value: '{currentPerson.fname}'
            }
        },
        {
            xtype: 'textfield',
            anchor: '100%',
            fieldLabel: 'Last Name',
            bind: {
                disabled: '{!currentPerson}',
                value: '{currentPerson.lname}'
            }
        },
        {
            xtype: 'numberfield',
            anchor: '100%',
            fieldLabel: 'Age',
            bind: {
                disabled: '{!currentPerson}',
                value: '{currentPerson.age}'
            }
        }
    ]

});