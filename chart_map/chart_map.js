﻿var _0x487b=['死亡数（人）','死亡率（人口10万人あたり人）','serial','light','\x20\x20(','(*)この図は厚生労働省人口動態統計より、（一般財団法人）厚生労働統計協会が編集したものです。','right','regular','#AAAAAA','cat','valueAxes','stackType','none','line','[[category]]年:\x20[[val]]人','val','column','[[title]]:\x20[[value]]人','round','graphs','mapDisp\x20called','JP-01','JP-02','JP-03','JP-04','JP-05','JP-06','JP-07','JP-08','JP-09','JP-10','JP-11','JP-12','JP-13','JP-15','JP-16','JP-17','JP-19','JP-21','JP-22','JP-23','JP-24','JP-25','JP-26','JP-27','JP-28','JP-29','JP-30','JP-31','JP-32','JP-33','JP-34','JP-35','JP-36','JP-37','JP-38','JP-39','JP-40','JP-41','JP-42','JP-43','JP-44','JP-45','JP-46','stVal','makeChart','mapdiv','map','年\x20\x20','!50','japanLow','最大値','JPG','csv','Save\x20as\x20csv','cChartDisp\x20called','!10','#FFFFFF','[[stPref]]:\x20<b>[[stVal]]</b>','stPref','start','5-9歳','10-14歳','15-19歳','20-24歳','25-29歳','40-44歳','50-54歳','55-59歳','60-64歳','65-69歳','75-79歳','80-84歳','85-89歳','90-94歳','95-99歳','100歳以上','log','sChartDisp\x20called','#fd8d3c','#d94801','#e6550d','#a63603','#9ecae1','#6baed6','#2171b5','#084594','#bcbddc','#9e9ac8','#807dba','#6a51a3','#4a1486','#e5f5e0','#a1d99b','#74c476','#41ab5d','#006d2c','#00441b','#000000','length','push'];(function(_0x7db62,_0x2d285e){var _0x42b040=function(_0x191904){while(--_0x191904){_0x7db62['push'](_0x7db62['shift']());}};_0x42b040(++_0x2d285e);}(_0x487b,0x1bc));var _0xd107=function(_0x28c6cb,_0x3c1361){_0x28c6cb=_0x28c6cb-0x0;var _0x1ff1c0=_0x487b[_0x28c6cb];return _0x1ff1c0;};var ageClassList={0:'総数',1:'0歳',2:'1歳',3:'2歳',4:'3歳',5:'4歳',6:'0-4歳',7:_0xd107('0x0'),8:_0xd107('0x1'),9:_0xd107('0x2'),10:_0xd107('0x3'),11:_0xd107('0x4'),12:'30-34歳',13:'35-39歳',14:_0xd107('0x5'),15:'45-49歳',16:_0xd107('0x6'),17:_0xd107('0x7'),18:_0xd107('0x8'),19:_0xd107('0x9'),20:'70-74歳',21:_0xd107('0xa'),22:_0xd107('0xb'),23:_0xd107('0xc'),24:_0xd107('0xd'),25:_0xd107('0xe'),26:_0xd107('0xf'),27:'不詳'};function sChartDisp(){console[_0xd107('0x10')](_0xd107('0x11'),codWCode,codName,genderName);console[_0xd107('0x10')](dCount[0x0]);console[_0xd107('0x10')](dCount[0x1]);dataProvider=[];color2=['#fdae6b',_0xd107('0x12'),'#f16913',_0xd107('0x13'),'#8c2d04'];color1=[_0xd107('0x12'),_0xd107('0x14'),_0xd107('0x15'),_0xd107('0x16'),_0xd107('0x17'),'#4292c6',_0xd107('0x18'),_0xd107('0x19'),_0xd107('0x1a'),_0xd107('0x1b'),_0xd107('0x1c'),_0xd107('0x1d'),_0xd107('0x1e'),_0xd107('0x1f'),'#c7e9c0',_0xd107('0x20'),_0xd107('0x21'),_0xd107('0x22'),'#238b45',_0xd107('0x23'),_0xd107('0x24'),_0xd107('0x25')];for(var _0x1427ba=0x0;_0x1427ba<dCount[_0xd107('0x26')];_0x1427ba++){if(dCount[_0x1427ba][0x0]==codWCode){if(type==0x2){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0x4],'val1':dCount[_0x1427ba][0x5],'val2':dCount[_0x1427ba][0x6],'val3':dCount[_0x1427ba][0x7],'val4':dCount[_0x1427ba][0x8]};}else if(type==0x1){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0x9],'val1':dCount[_0x1427ba][0xa],'val2':dCount[_0x1427ba][0xb],'val3':dCount[_0x1427ba][0xc],'val4':dCount[_0x1427ba][0xd],'val5':dCount[_0x1427ba][0xe],'val6':dCount[_0x1427ba][0xf],'val7':dCount[_0x1427ba][0x10],'val8':dCount[_0x1427ba][0x11],'val9':dCount[_0x1427ba][0x12],'val10':dCount[_0x1427ba][0x13],'val11':dCount[_0x1427ba][0x14],'val12':dCount[_0x1427ba][0x15],'val13':dCount[_0x1427ba][0x16],'val14':dCount[_0x1427ba][0x17],'val15':dCount[_0x1427ba][0x18],'val16':dCount[_0x1427ba][0x19],'val17':dCount[_0x1427ba][0x1a],'val18':dCount[_0x1427ba][0x1b],'val19':dCount[_0x1427ba][0x1c],'val20':dCount[_0x1427ba][0x1d],'val21':dCount[_0x1427ba][0x1e]};}else if(type==0x31){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val':dCount[_0x1427ba][0x6]};}else if(type==0x28){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val':dCount[_0x1427ba][0x4]};}else if(type==0x29){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val':dCount[_0x1427ba][0x5]};}else if(type==0x2a){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0x7],'val1':dCount[_0x1427ba][0x8],'val2':dCount[_0x1427ba][0x9]};}else if(type==0x2b){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0xa],'val1':dCount[_0x1427ba][0xb],'val2':dCount[_0x1427ba][0xc],'val3':dCount[_0x1427ba][0xd],'val4':dCount[_0x1427ba][0xe]};}else if(type==0x2c){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0xf],'val1':dCount[_0x1427ba][0x10],'val2':dCount[_0x1427ba][0x11],'val3':dCount[_0x1427ba][0x12],'val4':dCount[_0x1427ba][0x13]};}else if(type==0x2d){var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val0':dCount[_0x1427ba][0x14],'val1':dCount[_0x1427ba][0x15],'val2':dCount[_0x1427ba][0x16]};}else{var _0x8053f5={'cat':dCount[_0x1427ba][0x2],'val':dCount[_0x1427ba][0x3]};};console[_0xd107('0x10')](_0x8053f5);dataProvider[_0xd107('0x27')](_0x8053f5);};};if(type==0x0||type==0x1||type==0x2){var _0x55cad9=_0xd107('0x28');}else{var _0x55cad9=_0xd107('0x29');};chartArg={'type':_0xd107('0x2a'),'theme':_0xd107('0x2b'),'titles':[{'text':titleText},{'text':codName+_0xd107('0x2c')+genderName+')'+'\x20'+prefName}],'allLabels':[{'x':0x0,'y':'!10','text':_0xd107('0x2d'),'size':0x8}],'legend':{'enabled':!![],'useGraphSettings':!![],'position':_0xd107('0x2e'),'reversedOrder':!![],'markerSize':0xa,'verticalGap':0x3},'dataProvider':dataProvider,'valueAxes':[{'stackType':_0xd107('0x2f'),'color':_0xd107('0x25'),'gridColor':_0xd107('0x30'),'gridAlpha':0.2,'integersOnly':!![],'minHorizontalGap':0x64,'position':'left','title':_0x55cad9,'titleRotation':0x10e,'titleBold':![],'minimum':0x0}],'categoryField':_0xd107('0x31'),'categoryAxis':{'gridAlpha':0x0,'title':'年'},'chartCursor':{'cursorAlpha':0.1,'cursorColor':_0xd107('0x25'),'fullWidth':!![],'valueBalloonsEnabled':!![],'zoomable':!![]},'export':{'enabled':!![]}};if(type==0x1||type==0x2){chartArg[_0xd107('0x32')][0x0][_0xd107('0x33')]=_0xd107('0x2f'),chartArg[_0xd107('0x32')][0x0]['gridAlpha']=0.2;}else{chartArg[_0xd107('0x32')][0x0][_0xd107('0x33')]=_0xd107('0x34'),chartArg[_0xd107('0x32')][0x0]['gridAlpha']=0.8;};var _0x3b3ba0=[{'type':_0xd107('0x35'),'balloonText':_0xd107('0x36'),'fillAlphas':0.5,'lineAlpha':0x1,'valueField':_0xd107('0x37'),'bullet':'round','bulletSize':0x6}];var _0x26e080=[];for(var _0x602229=0x0;_0x602229<0x16;_0x602229++){_0x26e080[_0x602229]={'title':ageClassList[0x6+_0x602229],'type':_0xd107('0x38'),'balloonText':'','fillAlphas':0x1,'lineAlpha':0x1,'valueField':_0xd107('0x37')+_0x602229,'lineColor':color1[_0x602229]};}var _0x371fe6=[];for(var _0x602229=0x0;_0x602229<0x5;_0x602229++){_0x371fe6[_0x602229]={'title':ageClassList[0x1+_0x602229],'type':_0xd107('0x38'),'balloonText':_0xd107('0x39'),'fillAlphas':0x1,'lineAlpha':0x1,'valueField':_0xd107('0x37')+_0x602229,'lineColor':color2[_0x602229]};}var _0xa91682=[];for(var _0x602229=0x0;_0x602229<0x3;_0x602229++){_0xa91682[_0x602229]={'title':ageClassList[0x6+_0x602229],'type':_0xd107('0x35'),'balloonText':'[[title]]:\x20[[value]]人','fillAlphas':0x0,'lineAlpha':0x1,'bullet':_0xd107('0x3a'),'bulletSize':0x6,'valueField':_0xd107('0x37')+_0x602229,'lineColor':color1[_0x602229],'lineThickness':0x3};}var _0x3c4457=[];for(var _0x602229=0x0;_0x602229<0x5;_0x602229++){_0x3c4457[_0x602229]={'title':ageClassList[0x9+_0x602229],'type':_0xd107('0x35'),'balloonText':'[[title]]:\x20[[value]]人','fillAlphas':0x0,'lineAlpha':0x1,'bullet':'round','bulletSize':0x6,'valueField':_0xd107('0x37')+_0x602229,'lineColor':color1[0x3+_0x602229],'lineThickness':0x3};}var _0xc55c4f=[];for(var _0x602229=0x0;_0x602229<0x5;_0x602229++){_0xc55c4f[_0x602229]={'title':ageClassList[0xe+_0x602229],'type':_0xd107('0x35'),'balloonText':'[[title]]:\x20[[value]]人','fillAlphas':0x0,'lineAlpha':0x1,'bullet':_0xd107('0x3a'),'bulletSize':0x6,'valueField':_0xd107('0x37')+_0x602229,'lineColor':color1[0x8+_0x602229],'lineThickness':0x3};}var _0x44500b=[];for(var _0x602229=0x0;_0x602229<0x3;_0x602229++){_0x44500b[_0x602229]={'title':ageClassList[0x13+_0x602229],'type':_0xd107('0x35'),'balloonText':_0xd107('0x39'),'fillAlphas':0x0,'lineAlpha':0x1,'bullet':_0xd107('0x3a'),'bulletSize':0x6,'valueField':'val'+_0x602229,'lineColor':color1[0xf+_0x602229],'lineThickness':0x3};}if(type==0x2){chartArg[_0xd107('0x3b')]=_0x371fe6;}else if(type==0x1){chartArg[_0xd107('0x3b')]=_0x26e080;}else if(type==0x2a){chartArg[_0xd107('0x3b')]=_0xa91682;}else if(type==0x2b){chartArg[_0xd107('0x3b')]=_0x3c4457;}else if(type==0x2c){chartArg[_0xd107('0x3b')]=_0xc55c4f;}else if(type==0x2d){chartArg[_0xd107('0x3b')]=_0x44500b;}else{chartArg[_0xd107('0x3b')]=_0x3b3ba0;};var _0xd34469=AmCharts['makeChart'](sChartdiv,chartArg);};function mapDisp(){console[_0xd107('0x10')](_0xd107('0x3c'));var _0x3922ac=new Array();var _0x5c08d2=[_0xd107('0x3d'),_0xd107('0x3e'),_0xd107('0x3f'),_0xd107('0x40'),_0xd107('0x41'),_0xd107('0x42'),_0xd107('0x43'),_0xd107('0x44'),_0xd107('0x45'),_0xd107('0x46'),_0xd107('0x47'),_0xd107('0x48'),_0xd107('0x49'),'JP-14',_0xd107('0x4a'),_0xd107('0x4b'),_0xd107('0x4c'),'JP-18',_0xd107('0x4d'),'JP-20',_0xd107('0x4e'),_0xd107('0x4f'),_0xd107('0x50'),_0xd107('0x51'),_0xd107('0x52'),_0xd107('0x53'),_0xd107('0x54'),_0xd107('0x55'),_0xd107('0x56'),_0xd107('0x57'),_0xd107('0x58'),_0xd107('0x59'),_0xd107('0x5a'),_0xd107('0x5b'),_0xd107('0x5c'),_0xd107('0x5d'),_0xd107('0x5e'),_0xd107('0x5f'),_0xd107('0x60'),_0xd107('0x61'),_0xd107('0x62'),_0xd107('0x63'),_0xd107('0x64'),_0xd107('0x65'),_0xd107('0x66'),_0xd107('0x67'),'JP-47'];for(var _0x2821bc=0x0;_0x2821bc<0x2f;_0x2821bc++){mcells={'id':_0x5c08d2[_0x2821bc],'value':dCount[_0x2821bc+0x1][_0xd107('0x68')]};console['log'](mcells);_0x3922ac['push'](mcells);};var _0xd591a9=AmCharts[_0xd107('0x69')](_0xd107('0x6a'),{'type':_0xd107('0x6b'),'theme':_0xd107('0x2b'),'titles':[{'text':titleText},{'text':yearName+_0xd107('0x6c')+codName+'('+genderName+')'}],'allLabels':[{'x':0x0,'y':_0xd107('0x6d'),'text':_0xd107('0x2d'),'size':0x8}],'colorSteps':0xa,'dataProvider':{'map':_0xd107('0x6e'),'areas':_0x3922ac},'areasSettings':{'autoZoom':![]},'valueLegend':{'fontSize':0xc,'height':0xf,'width':0x12c,'bottom':0x384,'left':0xa,'minValue':'最小値','maxValue':_0xd107('0x6f')},'zoomControl':{'zoomControlEnabled':![]},'export':{'enabled':!![],'menu':[{'format':_0xd107('0x70'),'label':'Save\x20as\x20JPG'},{'format':_0xd107('0x71'),'label':_0xd107('0x72')}]}});};function cChartDisp(){console[_0xd107('0x10')](_0xd107('0x73'));var _0x3f45c0=AmCharts[_0xd107('0x69')](_0xd107('0x6a'),{'type':_0xd107('0x2a'),'theme':'light','rotate':!![],'titles':[{'text':titleText},{'text':yearName+_0xd107('0x6c')+codName+'('+genderName+')'}],'allLabels':[{'x':0x0,'y':_0xd107('0x74'),'text':_0xd107('0x2d'),'size':0x8}],'dataProvider':dCount,'valueAxes':[{'gridColor':_0xd107('0x75'),'gridAlpha':0.2,'dashLength':0x0}],'valueAxes':[{'color':_0xd107('0x25'),'gridColor':_0xd107('0x75'),'gridAlpha':0.2,'dashLength':0x0,'minHorizontalGap':0x64,'position':_0xd107('0x2e'),'title':'','titleRotation':0x0,'titleBold':![],'minimum':0x0}],'gridAboveGraphs':!![],'graphs':[{'balloonText':_0xd107('0x76'),'fillAlphas':0.8,'lineAlpha':0.2,'type':'column','valueField':'stVal'}],'chartCursor':{'categoryBalloonEnabled':![],'cursorAlpha':0x0,'zoomable':![]},'categoryField':_0xd107('0x77'),'categoryAxis':{'gridPosition':_0xd107('0x78'),'gridAlpha':0x0,'labelRotation':0x5a,'labelFrequency':0x1},'export':{'enabled':!![]}});}