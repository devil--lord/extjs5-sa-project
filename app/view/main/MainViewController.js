/*
 * File: app/view/main/MainViewController.js
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

Ext.define('ext5.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function() {
        this.control({
            'viewport': {
                resize: function (view, width, height, oldWidth, oldHeight) {
                    if (oldWidth >= width) {
                        this.fireEvent('togglescreen', false);
                    }
                }
            },
            // breadcrumb에서 클릭 이벤트를 받는다.
            '[itemId=showTreeNav]' : {
                click : 'showTreeNav'
            },
            '[itemId=showBreadcrumbNav]' : {
                click : 'showBreadcrumbNav'
            }
        });

        this.setConfig({control: {
            //     '#': {
            //         resize: function (view, width, height, oldWidth, oldHeight) {
            //             if (oldWidth > width) {
            //                 this.fireEvent('togglescreen', false);
            //             }
            //         }
            //     },
            //     // breadcrumb에서 클릭 이벤트를 받는다.
            //     '[itemId=showTreeNav]' : {
            //         click : 'showTreeNav'
            //     },
            //     '[itemId=showBreadcrumbNav]' : {
            //         click : 'showBreadcrumbNav'
            //     }
        }});
    },

    showTreeNav: function() {
        var refs = this.getReferences(),    // #1
            treeNav = refs.tree,    // #2
            breadcrumbNav = refs.breadcrumb;    // #3

        if (treeNav) {    // #4
            treeNav.show(); // #5
        } else { // #6
            treeNav = this.getView().add({  // #7
                region: 'west', // #8
                reference: 'tree',  // #9
                split:true,
                xtype: 'navigationtree'    // #10
            });
        }
        treeNav.getSelectionModel().select([    // #11
            refs['breadcrumb.toolbar'].getSelection()   // #12
        ]);

        breadcrumbNav.hide();   // #13
        refs.contentPanel.getHeader().show();  // #14
        this._hasTreeNav = true;    // #15

        this._hasTreeNav = true;    // #3
        this.getView().saveState();  // #4
    },

    showBreadcrumbNav: function() {
        var refs = this.getReferences(),
            breadcrumbNav = refs.breadcrumb,
            treeNav = refs.tree,
            selection = treeNav.getSelectionModel().getSelection()[0];  // #1

        if (breadcrumbNav) {    // #2
            breadcrumbNav.show();   // #3
        } else {
            refs.contentPanel.addDocked({   // #4
                xtype: 'navigationbreadcrumb',
                selection: selection    // #5
            });
        }

        refs['breadcrumb.toolbar'].setSelection(selection); // #6

        treeNav.hide(); // #7
        refs.contentPanel.getHeader().hide();   // #8

        this._hasTreeNav = false;   // #9

        this._hasTreeNav = false;   // #1
        this.getView().saveState();  // #2
    },

    applyState: function(state) {
        if (state.hasTreeNav) {     			// #2
            this.getView().add({    			// #3
                region: 'west',     			// #4
                reference: 'tree',  			// #5
                xtype: 'navigationtree'    		// #6
            });
            var refs = this.getReferences();    		// #7
            refs.breadcrumb.hide(); 			// #8
            refs.contentPanel.header.hidden = false;    // #9
            this._hasTreeNav = true;    		// #10
        } else {
            this._hasTreeNav = false;   		// #11
        }
    },

    getState: function() {
        return {    					// #12
            hasTreeNav: this._hasTreeNav    		// #13
        };
    }

});
