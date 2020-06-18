var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Button=_interopRequireDefault(require("../../Button/Button"));var _IconButton=_interopRequireDefault(require("../../IconButton/IconButton"));var _CardActions=_interopRequireDefault(require("./CardActions.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Card/CardActions/CardActions.js";var CardActions=function(_Component){(0,_inherits2.default)(CardActions,_Component);function CardActions(){(0,_classCallCheck2.default)(this,CardActions);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(CardActions).apply(this,arguments));}(0,_createClass2.default)(CardActions,[{key:"_leftActionItems",value:function _leftActionItems(){var leftActionItems=this.props.leftActionItems;return leftActionItems.map(function(item){if(item.name){return _react.default.createElement(_Button.default,{key:item.name,onPress:item.onPress,text:item.name,__source:{fileName:_jsxFileName,lineNumber:22}});}else{return item;}});}},{key:"_rightActionItems",value:function _rightActionItems(){var rightActionItems=this.props.rightActionItems;return rightActionItems.map(function(item){if(item.name){return _react.default.createElement(_IconButton.default,{key:item.name,onPress:item.onPress,name:item.name,size:item.size?item.size:24,color:item.color?item.color:'rgba(0,0,0,.54)',style:{marginLeft:16},__source:{fileName:_jsxFileName,lineNumber:34}});}else{return item;}});}},{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,leftActionItems=_this$props.leftActionItems,rightActionItems=_this$props.rightActionItems;return _react.default.createElement(_reactNative.View,{style:[_CardActions.default.container,style],__source:{fileName:_jsxFileName,lineNumber:52}},_react.default.createElement(_reactNative.View,{style:_CardActions.default.actions,__source:{fileName:_jsxFileName,lineNumber:53}},leftActionItems&&this._leftActionItems()),_react.default.createElement(_reactNative.View,{style:_CardActions.default.moreActions,__source:{fileName:_jsxFileName,lineNumber:56}},rightActionItems&&this._rightActionItems()));}}]);return CardActions;}(_react.Component);(0,_defineProperty2.default)(CardActions,"propTypes",{children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),leftActionItems:_propTypes.default.array,rightActionItems:_propTypes.default.array});var _default=(0,_withTheme.default)(CardActions);exports.default=_default;