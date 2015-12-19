/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
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
    views: [
        'MyContainer'
    ],
    name: 'CalAPP',

    launch: function() {
        var calendarView = Ext.create('Ext.ux.TouchCalendarView', {
                                minDate: Ext.Date.add(new Date(), Ext.Date.DAY, -46),
                                maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                                viewMode: 'day',
                                weekStart: 0,
                                value: new Date(),
                                eventStore: eventStore,

                                plugins: [Ext.create('Ext.ux.TouchCalendarEvents', {
                                    eventHeight: 'auto',
                                    eventBarTpl: '<div>{event}</div><div>{title}</div>'
                                })]
                            });

                            var calendarPanel = new Ext.Panel({
                                fullscreen: true,
                                layout: 'fit',
                                items: [calendarView, {
                                    xtype: 'toolbar',
                                    docked: 'top',
                                    items: [{
                                        xtype: 'button',
                                        text: 'Month View',
                                        handler: function(){
                                            calendarView.setViewMode('month');
                                        }
                                    }, {
                                        xtype: 'button',
                                        text: 'Week View',
                                        handler: function(){
                                            calendarView.setViewMode('week');
                                        }
                                    }, {
                                        xtype: 'button',
                                        text: 'Day View',
                                        handler: function(){
                                            calendarView.setViewMode('day');
                                        }
                                    }]
                                }]
                            });
    }

});
