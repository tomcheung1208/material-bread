var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _Header=_interopRequireDefault(require("../../storybook/components/Header"));var _Container=_interopRequireDefault(require("../../storybook/components/Container"));var _storiesOf=require("../../storybook/helpers/storiesOf");var _jsxFileName="/Users/cody/projects/material-bread/src/Utils/Shadow/Shadow.stories.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var pageWidth=_reactNative.Platform.OS=='web'?window.innerWidth:_reactNative.Dimensions.get('window').width;var shadowTypeNum=24;var maxItemPerRow=shadowTypeNum/4;var itemWidth=pageWidth<1200?pageWidth/10:100;var styles=_reactNative.StyleSheet.create({container:{position:'relative',display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:'8%',marginBottom:30},shadowItem:{padding:8,height:itemWidth,width:itemWidth,alignItems:'center',justifyContent:'center',backgroundColor:'white',borderRadius:100,fontSize:itemWidth/3}});var shadowItems=[];for(var i=1;i<=shadowTypeNum;i++){shadowItems.push(_react.default.createElement(_reactNative.View,{style:[styles.shadowItem,_objectSpread({},(0,_.shadow)(i))],__source:{fileName:_jsxFileName,lineNumber:41}},i));}var shadowDividedItems=[];for(var _i=0;_i<maxItemPerRow;_i++){shadowDividedItems.push(_react.default.createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:47}},shadowItems.slice(maxItemPerRow*_i,maxItemPerRow*(_i+1))));}var _default=(0,_storiesOf.storiesOf)('Utils|Shadows',module).addParameters({jest:['Shadows']}).add('Simple',function(){return _react.default.createElement(_Container.default,{__source:{fileName:_jsxFileName,lineNumber:56}},_react.default.createElement(_Header.default,{title:'Shadows',subtitle:'Use the shadow() function to add platform shadow to the style of any component',__source:{fileName:_jsxFileName,lineNumber:57}}),_react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:64}},shadowDividedItems));});exports.default=_default;