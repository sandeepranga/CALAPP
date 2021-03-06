/*
 * File: app/view/MyContainer.js
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

Ext.define('CalAPP.view.MyContainer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        height: '100%',
        itemId: 'tinyCotainer',
        width: '100%',
        layout: 'fit',
        items: [
            {
                xtype: 'textfield',
                docked: 'top',
                itemId: 'to',
                label: 'To',
                placeHolder: 'TheUnknowns@walkingtree.in'
            },
            {
                xtype: 'textfield',
                docked: 'top',
                itemId: 'subject',
                label: 'Subject',
                placeHolder: 'subject'
            },
            {
                xtype: 'container',
                html: '<div id="tymca" ></div>',
                itemId: 'tinyMCAEditor',
                width: '100%',
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            tinymce.remove();

                            tinymce.init({
                                selector: '#tymca',
                                height: '100%',
                                theme: 'modern',
                                plugins: [
                                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                                'searchreplace wordcount visualblocks visualchars code fullscreen',
                                'insertdatetime media nonbreaking save table contextmenu directionality',
                                'emoticons template paste textcolor colorpicker textpattern imagetools'
                                ],
                                toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                                toolbar2: 'print preview media | forecolor backcolor emoticons',
                                image_advtab: true,
                                templates: [
                                { title: 'Test template 1', content: 'Test 1' },
                                { title: 'Test template 2', content: 'Test 2' }
                                ],
                                content_css: [
                                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                                '//www.tinymce.com/css/codepen.min.css'
                                ]
                            });

                            if(!this.up('#tinyCotainer').config.event){

                                var button = this.up('#tinyCotainer').down('#deleteBUtton');
                                button.hide();

                            }else{

                                var data = this.up('#tinyCotainer').config.event.data;
                                var tinyCont = this.up('#tinyCotainer');
                                var toMail = tinyCont.down('#to').setValue(data.to);
                                var subJect = tinyCont.down('#subject').setValue(data.subject);
                                tinymce.activeEditor.setContent(data.content);
                            }
                        },
                        event: 'painted'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            var tinyCont = this.up('#tinyCotainer');
                            var toMail = tinyCont.down('#to').getValue();
                            var subJect = tinyCont.down('#subject').getValue();
                            var content = tinymce.activeEditor.getContent();
                            var currentdate = '';
                            var endDate = '';
                            if(!tinyCont.config.event){
                                currentdate = tinyCont.config.currentDate;
                                endDate = tinyCont.config.currentDate;
                            }else{
                                currentdate = tinyCont.config.event.data.start;
                                endDate = tinyCont.config.event.data.end;
                                eventStore.remove(tinyCont.config.event);
                            }
                            eventStore.add({
                                event: toMail,
                                title: subJect,
                                start: currentdate,
                                end: endDate,
                                css: 'red',
                                content :content,
                                subject:subJect,
                                to:toMail

                            });
                            this.up('#navigationView').pop();
                            CalAPP.calender.refresh();
                        },
                        text: 'Schedule'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            var tinyCont = this.up('#tinyCotainer');

                            if(tinyCont.config.event){
                                eventStore.remove(tinyCont.config.event);
                            }
                            this.up('#navigationView').pop();
                            CalAPP.calender.refresh();
                        },
                        itemId: 'deleteBUtton',
                        text: 'delete'
                    }
                ]
            }
        ]
    }

});