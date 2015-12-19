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
                                //fullscreen: true,
                                layout: 'fit',
                                title:'CALENDER',
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
                                    },{
                                        xtype:'button',
                                        text:'createEvent',
                                        itemId:'createEvent',
                                        handler:function(){
                                            //alert('create New Event');
                                        }
                                    }]
                                }]
                            });
        var nv = Ext.create('Ext.NavigationView', {
            fullscreen: true,
            itemId:'navigationView',
            items: [calendarPanel]
        });


                            calendarView.on('eventtap', function(event){



                                var compose = Ext.create('CalAPP.view.MyContainer',{
                                    event:event
                                });
                                nv.push(compose);

                            });
                            calendarView.on('eventdragstart', function(draggable, eventRecord, e){
                                console.log('eventdragstart');
                                //console.log(arguments);
                            });
                            calendarView.on('beforeeventdrop', function(draggable, eventRecord, e){
                                console.log('beforeeventdrop');
                                //console.log(arguments);
                                return true;
                            });
                            calendarView.on('eventdrop', function(draggable, eventRecord, e){
                                console.log('eventdrop');
                                //console.log(arguments);
                            });
                            calendarView.on('eventdrag', function(draggable, eventRecord, e){
                                console.log('eventdrag');
                                //console.log(arguments);
                            });
                            calendarView.on('periodchange', function(view, minDate, maxDate, direction){
                                console.log('periodchange');
                                console.log(arguments);
                            });
                            calendarView.on('selectionchange', function(view, newDate, oldDate){

                               if(view.getViewMode()!="DAY"){
                                   calendarView.setViewMode('day');
                                   calendarView.setValue(newDate);
                                   return;
                               }


                                //Ext.componentQuery.query('createEvent')[0].enable();
                                //Ext.componentQuery.query('createEvent')[0].presentSelectedDate = newDate ;
                                //debugger;
                            });
                            calendarView.on('eventdragstart', function(draggable, eventRecord, e){
                                console.log('eventdragstart');
                                //console.log(arguments);
                            });
                            calendarView.on('beforeeventdrop', function(draggable, eventRecord, e){
                                console.log('beforeeventdrop');
                                //console.log(arguments);
                                return true;
                            });
                            calendarView.on('eventdrop', function(draggable, eventRecord, e){
                                console.log('eventdrop');
                                //console.log(arguments);
                            });
                            calendarView.on('eventdrag', function(draggable, eventRecord, e){
                                console.log('eventdrag');
                                //console.log(arguments);
                            });
                            calendarView.on('periodchange', function(view, minDate, maxDate, direction){
                                console.log('periodchange');
                                console.log(arguments);
                            });
                            calendarView.on('selectionchange', function(view, newDate, oldDate){
                                console.log('selectionchange');
                                console.log(arguments);
                            });



    }

});
