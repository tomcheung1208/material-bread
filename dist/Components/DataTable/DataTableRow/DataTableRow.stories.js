var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _=require("../../..");var _Header=_interopRequireDefault(require("../../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../../storybook/components/Container"));var _storiesOf=require("../../../storybook/helpers/storiesOf");var _storybookState=require("@sambego/storybook-state");var _jsxFileName="/Users/cody/projects/material-bread/src/Components/DataTable/DataTableRow/DataTableRow.stories.js";var store=new _storybookState.Store({checkedOne:false,checkedTwo:false,checkedThree:false});var _default=(0,_storiesOf.storiesOf)('Components|Data Table/Row',module).addParameters({jest:['DataTableRow']}).add('simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:20}},_react.default.createElement(_Header.default,{title:'DataTable Row',__source:{fileName:_jsxFileName,lineNumber:21}}),_react.default.createElement(_.DataTable,{__source:{fileName:_jsxFileName,lineNumber:22}},_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:23}},_react.default.createElement(_.DataTableCell,{text:'Desert',type:'header',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:24}}),_react.default.createElement(_.DataTableCell,{text:'Calories',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:30}}),_react.default.createElement(_.DataTableCell,{text:'Fat (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:31}}),_react.default.createElement(_.DataTableCell,{text:'Carbs (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:32}}),_react.default.createElement(_.DataTableCell,{text:'Protein (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:33}})),_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:35}},_react.default.createElement(_.DataTableCell,{text:'Frozen yogurt',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:36}}),_react.default.createElement(_.DataTableCell,{text:'159',right:true,__source:{fileName:_jsxFileName,lineNumber:37}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:38}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:39}}),_react.default.createElement(_.DataTableCell,{text:'4',right:true,__source:{fileName:_jsxFileName,lineNumber:40}})),_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:42}},_react.default.createElement(_.DataTableCell,{text:'Ice Cream Sandwich',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:43}}),_react.default.createElement(_.DataTableCell,{text:'237',right:true,__source:{fileName:_jsxFileName,lineNumber:48}}),_react.default.createElement(_.DataTableCell,{text:'9.0',right:true,__source:{fileName:_jsxFileName,lineNumber:49}}),_react.default.createElement(_.DataTableCell,{text:'37',right:true,__source:{fileName:_jsxFileName,lineNumber:50}}),_react.default.createElement(_.DataTableCell,{text:'4.3',right:true,__source:{fileName:_jsxFileName,lineNumber:51}})),_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:53}},_react.default.createElement(_.DataTableCell,{text:'Eclair',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:54}}),_react.default.createElement(_.DataTableCell,{text:'262',right:true,__source:{fileName:_jsxFileName,lineNumber:55}}),_react.default.createElement(_.DataTableCell,{text:'16.0',right:true,__source:{fileName:_jsxFileName,lineNumber:56}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:57}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:58}}))));}).add('with checkbox',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:64}},_react.default.createElement(_Header.default,{title:'DataTable Row',__source:{fileName:_jsxFileName,lineNumber:65}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:66}},function(state){return _react.default.createElement(_.DataTable,{__source:{fileName:_jsxFileName,lineNumber:68}},_react.default.createElement(_.DataTableRow,{checkboxOffset:true,type:'header',__source:{fileName:_jsxFileName,lineNumber:69}},_react.default.createElement(_.DataTableCell,{text:'Desert',type:'header',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:70}}),_react.default.createElement(_.DataTableCell,{text:'Calories',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:76}}),_react.default.createElement(_.DataTableCell,{text:'Fat (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:77}}),_react.default.createElement(_.DataTableCell,{text:'Carbs (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:78}}),_react.default.createElement(_.DataTableCell,{text:'Protein (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:79}})),_react.default.createElement(_.DataTableRow,{showCheckbox:true,selected:state.checkedOne,onPressCheckbox:function onPressCheckbox(){return store.set({checkedOne:!state.checkedOne});},__source:{fileName:_jsxFileName,lineNumber:81}},_react.default.createElement(_.DataTableCell,{text:'Frozen yogurt',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:87}}),_react.default.createElement(_.DataTableCell,{text:'159',right:true,__source:{fileName:_jsxFileName,lineNumber:92}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:93}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:94}}),_react.default.createElement(_.DataTableCell,{text:'4',right:true,__source:{fileName:_jsxFileName,lineNumber:95}})),_react.default.createElement(_.DataTableRow,{showCheckbox:true,selected:state.checkedTwo,onPressCheckbox:function onPressCheckbox(){return store.set({checkedTwo:!state.checkedTwo});},__source:{fileName:_jsxFileName,lineNumber:97}},_react.default.createElement(_.DataTableCell,{text:'Ice Cream Sandwich',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:103}}),_react.default.createElement(_.DataTableCell,{text:'237',right:true,__source:{fileName:_jsxFileName,lineNumber:108}}),_react.default.createElement(_.DataTableCell,{text:'9.0',right:true,__source:{fileName:_jsxFileName,lineNumber:109}}),_react.default.createElement(_.DataTableCell,{text:'37',right:true,__source:{fileName:_jsxFileName,lineNumber:110}}),_react.default.createElement(_.DataTableCell,{text:'4.3',right:true,__source:{fileName:_jsxFileName,lineNumber:111}})),_react.default.createElement(_.DataTableRow,{showCheckbox:true,selected:state.checkedThree,onPressCheckbox:function onPressCheckbox(){return store.set({checkedThree:!state.checkedThree});},__source:{fileName:_jsxFileName,lineNumber:113}},_react.default.createElement(_.DataTableCell,{text:'Eclair',borderRight:true,flex:2,__source:{fileName:_jsxFileName,lineNumber:119}}),_react.default.createElement(_.DataTableCell,{text:'262',right:true,__source:{fileName:_jsxFileName,lineNumber:120}}),_react.default.createElement(_.DataTableCell,{text:'16.0',right:true,__source:{fileName:_jsxFileName,lineNumber:121}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:122}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:123}})));}));}).add('selected',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:131}},_react.default.createElement(_Header.default,{title:'DataTable Row',__source:{fileName:_jsxFileName,lineNumber:132}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:133}},function(state){return _react.default.createElement(_.DataTable,{__source:{fileName:_jsxFileName,lineNumber:135}},_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:136}},_react.default.createElement(_.DataTableCell,{text:'Desert',type:'header',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:137}}),_react.default.createElement(_.DataTableCell,{text:'Calories',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:143}}),_react.default.createElement(_.DataTableCell,{text:'Fat (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:144}}),_react.default.createElement(_.DataTableCell,{text:'Carbs (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:145}}),_react.default.createElement(_.DataTableCell,{text:'Protein (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:146}})),_react.default.createElement(_.DataTableRow,{selected:state.checkedOne,onPress:function onPress(){return store.set({checkedOne:!state.checkedOne});},__source:{fileName:_jsxFileName,lineNumber:148}},_react.default.createElement(_.DataTableCell,{text:'Frozen yogurt',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:151}}),_react.default.createElement(_.DataTableCell,{text:'159',right:true,__source:{fileName:_jsxFileName,lineNumber:156}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:157}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:158}}),_react.default.createElement(_.DataTableCell,{text:'4',right:true,__source:{fileName:_jsxFileName,lineNumber:159}})),_react.default.createElement(_.DataTableRow,{selected:state.checkedTwo,onPress:function onPress(){return store.set({checkedTwo:!state.checkedTwo});},__source:{fileName:_jsxFileName,lineNumber:161}},_react.default.createElement(_.DataTableCell,{text:'Ice Cream Sandwich',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:164}}),_react.default.createElement(_.DataTableCell,{text:'237',right:true,__source:{fileName:_jsxFileName,lineNumber:169}}),_react.default.createElement(_.DataTableCell,{text:'9.0',right:true,__source:{fileName:_jsxFileName,lineNumber:170}}),_react.default.createElement(_.DataTableCell,{text:'37',right:true,__source:{fileName:_jsxFileName,lineNumber:171}}),_react.default.createElement(_.DataTableCell,{text:'4.3',right:true,__source:{fileName:_jsxFileName,lineNumber:172}})),_react.default.createElement(_.DataTableRow,{selected:state.checkedThree,onPress:function onPress(){return store.set({checkedThree:!state.checkedThree});},__source:{fileName:_jsxFileName,lineNumber:174}},_react.default.createElement(_.DataTableCell,{text:'Eclair',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:177}}),_react.default.createElement(_.DataTableCell,{text:'262',right:true,__source:{fileName:_jsxFileName,lineNumber:178}}),_react.default.createElement(_.DataTableCell,{text:'16.0',right:true,__source:{fileName:_jsxFileName,lineNumber:179}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:180}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:181}})));}));}).add('hover',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:189}},_react.default.createElement(_Header.default,{title:'DataTable Row',__source:{fileName:_jsxFileName,lineNumber:190}}),_react.default.createElement(_storybookState.State,{store:store,style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:191}},function(state){return _react.default.createElement(_.DataTable,{__source:{fileName:_jsxFileName,lineNumber:193}},_react.default.createElement(_.DataTableRow,{__source:{fileName:_jsxFileName,lineNumber:194}},_react.default.createElement(_.DataTableCell,{text:'Desert',type:'header',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:195}}),_react.default.createElement(_.DataTableCell,{text:'Calories',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:201}}),_react.default.createElement(_.DataTableCell,{text:'Fat (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:202}}),_react.default.createElement(_.DataTableCell,{text:'Carbs (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:203}}),_react.default.createElement(_.DataTableCell,{text:'Protein (g)',type:'header',right:true,__source:{fileName:_jsxFileName,lineNumber:204}})),_react.default.createElement(_.DataTableRow,{hover:true,showCheckbox:true,selected:state.checkedOne,onPressCheckbox:function onPressCheckbox(){return store.set({checkedOne:!state.checkedOne});},__source:{fileName:_jsxFileName,lineNumber:206}},_react.default.createElement(_.DataTableCell,{text:'Frozen yogurt',borderRight:true,flex:2,__source:{fileName:_jsxFileName,lineNumber:213}}),_react.default.createElement(_.DataTableCell,{text:'159',right:true,__source:{fileName:_jsxFileName,lineNumber:214}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:215}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:216}}),_react.default.createElement(_.DataTableCell,{text:'4',right:true,__source:{fileName:_jsxFileName,lineNumber:217}})),_react.default.createElement(_.DataTableRow,{hover:true,showCheckbox:true,selected:state.checkedTwo,onPressCheckbox:function onPressCheckbox(){return store.set({checkedTwo:!state.checkedTwo});},__source:{fileName:_jsxFileName,lineNumber:219}},_react.default.createElement(_.DataTableCell,{text:'Ice Cream Sandwich',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:226}}),_react.default.createElement(_.DataTableCell,{text:'237',right:true,__source:{fileName:_jsxFileName,lineNumber:231}}),_react.default.createElement(_.DataTableCell,{text:'9.0',right:true,__source:{fileName:_jsxFileName,lineNumber:232}}),_react.default.createElement(_.DataTableCell,{text:'37',right:true,__source:{fileName:_jsxFileName,lineNumber:233}}),_react.default.createElement(_.DataTableCell,{text:'4.3',right:true,__source:{fileName:_jsxFileName,lineNumber:234}})),_react.default.createElement(_.DataTableRow,{hover:true,showCheckbox:true,selected:state.checkedThree,onPressCheckbox:function onPressCheckbox(){return store.set({checkedThree:!state.checkedThree});},__source:{fileName:_jsxFileName,lineNumber:236}},_react.default.createElement(_.DataTableCell,{text:'Eclair',borderRight:true,relativeWidth:2,__source:{fileName:_jsxFileName,lineNumber:243}}),_react.default.createElement(_.DataTableCell,{text:'262',right:true,__source:{fileName:_jsxFileName,lineNumber:244}}),_react.default.createElement(_.DataTableCell,{text:'16.0',right:true,__source:{fileName:_jsxFileName,lineNumber:245}}),_react.default.createElement(_.DataTableCell,{text:'24',right:true,__source:{fileName:_jsxFileName,lineNumber:246}}),_react.default.createElement(_.DataTableCell,{text:'6.0',right:true,__source:{fileName:_jsxFileName,lineNumber:247}})));}));});exports.default=_default;