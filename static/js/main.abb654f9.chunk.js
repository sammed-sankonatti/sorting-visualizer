(this["webpackJsonpsorting-visualizer"]=this["webpackJsonpsorting-visualizer"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),i=(a(19),a(1)),s=a(4),c=a(5),u=a(7),m=a(6),p=(a(20),a(21),a(22),a(2)),h=(a(23),"Button"),d="Button__Icon",g="Button_dense",f="Button_raised",E="Button_outlined",v="Button_unelevated",b="Button_uppercase";function y(e,t){var a=e;return r.a.createElement(a,{className:"".concat(d," ").concat(t)})}var S=function(e){var t,a=e.className,n=e.raised,l=e.unelevated,o=e.outlined,i=e.dense,s=e.notCased,c=e.disabled,u=e.icon,m=e.iconClass,d=e.href,S=e.onClick,_=e.children,k=function(e,t,a){var n="".concat(e);return Object.keys(t).forEach((function(e){t[e]&&(n+=" ".concat(e))})),n+=" ".concat(a)}(h,(t={},Object(p.a)(t,g,i),Object(p.a)(t,f,n),Object(p.a)(t,E,o),Object(p.a)(t,v,l),Object(p.a)(t,b,!s),t),a);return d?r.a.createElement("a",{href:d,className:k,disabled:c},u?y(u,m):null,r.a.createElement("span",{className:"Button__Label"},_)):r.a.createElement("button",{onClick:S,className:k,disabled:c},u?y(u,m):null,r.a.createElement("span",{className:"Button__Label"},_))},_=(a(24),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={checked:!1},e.toggleChecked=function(){e.setState((function(e){return{checked:!e.checked}}))},e.handleClick=function(t){t.preventDefault(),e.toggleChecked(),e.props.onSwitch()},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.checked&&this.setState({checked:this.props.checked})}},{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:this.props.checked})}},{key:"render",value:function(){var e="Switch";return this.state.checked&&(e+=" Switch_checked"),this.props.className&&(e+=" ".concat(this.props.className)),r.a.createElement("div",{className:e},r.a.createElement("label",{className:"Switch__Label",htmlFor:"Switch__Thumb"},this.props.label),r.a.createElement("div",{className:"Switch__Button"},r.a.createElement("div",{className:"Switch__Track"}),r.a.createElement("input",{className:"Switch__Thumb",onClick:this.handleClick,name:"Switch__Thumb",id:"Switch__Thumb",type:"button"})))}}]),a}(n.Component)),k=(a(25),a(26),"Backdrop"),w="Backdrop_opaque",C="Backdrop_dark",O="Backdrop_clickable";var A=function(e){var t,a=e.show,n=e.opaque,l=e.dark,o=e.className,i=e.onClick,s=function(e,t,a){var n="".concat(e);return Object.keys(t).forEach((function(e){t[e]&&(n+=" ".concat(e))})),n+=" ".concat(a)}(k,(t={},Object(p.a)(t,w,n),Object(p.a)(t,C,l),Object(p.a)(t,O,void 0!==i),t),o);return a?r.a.createElement("div",{className:s,onClick:i}):null},B=a(3),N=function(e){var t=e.open,a=e.items,n=e.onSelect;return t?r.a.createElement("ul",{className:"Menu__List"},a.map((function(e,t){return r.a.createElement("li",{key:"".concat(e,"_").concat(t),onClick:function(t){n(t,e)},className:"Menu__Item"},e)}))):null},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={open:e.props.open||!1},e.close=function(t){t.preventDefault(),e.setState({open:!1})},e.toggle=function(t){t.preventDefault(),e.setState((function(e){return{open:!e.open}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.selected,l=t.onSelect,o=t.placeholder,i=t.items,s=t.noDropIcon;return r.a.createElement("div",null,r.a.createElement(A,{show:this.state.open,onClick:this.close}),r.a.createElement("div",{className:"Menu ".concat(a)},r.a.createElement("header",{className:"Menu__Header"},s?r.a.createElement(S,{onClick:this.toggle,notCased:!0,className:n?null:"Menu__Placeholder"},n||o):r.a.createElement("div",{className:n?"Menu__SelectedItem":"Menu__Placeholder"},n||o),s?null:r.a.createElement(S,{icon:this.state.open?B.b:B.c,onClick:this.toggle})),r.a.createElement(N,{open:this.state.open,items:i,onSelect:function(t,a){l(a),e.close(t)}})))}}]),a}(n.Component),D=function(e){var t=e.algorithm,a=e.onAlgorithmChange,l=e.onGenerateRandomArray,o=e.arraySize,i=e.onArraySizeChange,s=e.onToggleDarkMode,c=e.darkMode;return r.a.createElement(n.Fragment,null,r.a.createElement(j,{placeholder:"Sort Algorithm",items:["Bubble Sort","Selection Sort","Insertion Sort","Merge Sort","Quick Sort","Quick Sort 3","Heap Sort","Shell Sort"],selected:t,onSelect:a}),r.a.createElement("div",{className:"AppControls__Size"},r.a.createElement("span",null,"Size"),r.a.createElement(j,{placeholder:"Array Size",items:["5","10","25","50","75","100"],selected:String(o),onSelect:i})),r.a.createElement(S,{onClick:l},"Randomize"),r.a.createElement(_,{label:"Dark Mode",onSwitch:s,checked:c}))},I=(a(27),function(e){var t=e.drawerOpen,a=e.toggleDrawer,n=e.children;return r.a.createElement("header",{className:"TopBar"},r.a.createElement("div",{className:"TopBar__Row"},r.a.createElement("section",{className:"TopBar__Section"},r.a.createElement(S,{icon:t?B.a:B.d,className:"TopBar__MenuButton",iconClass:"TopBar__Icon",onClick:a}),r.a.createElement("span",{className:"TopBar__Title"},"Sort Visualizer")),r.a.createElement("section",{className:"TopBar__Section TopBar__Section_align_end"},n)))}),M=(a(28),function(e){var t=e.open,a=e.children,l=e.closeDrawer,o="AppDrawer";return o+=t?" AppDrawer_open":" AppDrawer_closed",r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:o},r.a.createElement("div",{className:"AppDrawer__Content"},a)),r.a.createElement(A,{show:t,onClick:l}))}),T=(a(29),a(30),a(10)),z=(a(31),function(e){var t=e.width,a=e.height,n=e.val,l=e.stateA,o=e.stateB,i=e.stateC,s=e.stateD,c=e.sorted,u=e.style,m="Bar";c&&(m+=" Bar_sorted"),s?m+=" Bar_stateD":i?m+=" Bar_stateC":o?m+=" Bar_stateB":l&&(m+=" Bar_stateA");var p=Object(T.a)(Object(T.a)({},u),{},{width:"".concat(t,"%"),height:"".concat(a,"%")});return(l||o||i||s)&&(p.marginRight="".concat(.3*t,"%"),p.marginLeft="".concat(.3*t,"% ")),r.a.createElement("div",{style:p,className:m},r.a.createElement("span",{className:"Bar__Text"},n))}),x=function(e){var t=e.numbers,a=e.maxNum,n=e.groupA,l=e.groupB,o=e.groupC,i=e.groupD,s=e.sortedIndices;return r.a.createElement("div",{className:"SortChart"},function(e,t,a,n,l,o,i){return e.map((function(s,c){var u=100/e.length,m=s/t*100,p=a.includes(c),h=n.includes(c),d=l.includes(c),g=o.includes(c),f=i.includes(c),E=c===e.length?"0":u>3?"0.5rem":"0.125rem";return r.a.createElement(z,{key:"".concat(c,"_").concat(s),width:u,height:m,val:u>4?s:null,stateA:p,stateB:h,stateC:d,stateD:g,sorted:f,style:{marginRight:"".concat(E)}})}))}(t,a,n,l,o,i,s))};a(32);function R(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===e||t}var K=function(e){var t=e.onPlay,a=e.onPause,n=e.onBackward,l=e.onForward,o=e.onRepeat,i=e.onAdjustSpeed,s=e.playing,c=e.playDisabled,u=e.pauseDisabled,m=e.backwardDisabled,p=e.forwardDisabled,h=e.repeatDisabled,d=e.playbackSpeed;return r.a.createElement("div",{className:"VisualizerControls"},r.a.createElement(S,{icon:B.g,onClick:o,disabled:R(o,h),className:"VisualizerControls__Button"}),r.a.createElement(S,{icon:B.i,onClick:n,disabled:R(n,m),iconClass:"VisualizerControls__Icon",className:"VisualizerControls__Button"}),r.a.createElement(S,{icon:s?B.e:B.f,onClick:s?a:t,disabled:s?R(a,u):R(t,c),raised:!0,iconClass:"VisualizerControls__Icon",className:"VisualizerControls__CenterButton"}),r.a.createElement(S,{icon:B.h,onClick:l,disabled:R(l,p),iconClass:"VisualizerControls__Icon",className:"VisualizerControls__Button"}),r.a.createElement(j,{items:["0.25x","0.5x","1x","2x","4x"],placeholder:"Speed",selected:"".concat(d,"x"),onSelect:i,noDropIcon:!0,className:"VisualizerControls__SpeedButton"}))},H=(a(33),function(e){var t=e.width;return r.a.createElement("div",{className:"ProgressBar"},r.a.createElement("div",{className:"ProgressBar__Active",style:{width:"".concat(t,"%")}}))}),Q=(a(34),function(e){var t=e.groupA,a=e.groupB,n=e.groupC,l=e.groupD,o=t||a||n||l?r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__Sorted"}),r.a.createElement("span",null,"Sorted")):r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__Unsorted"}),r.a.createElement("span",null,"Unsorted")),i=t?r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__GroupA"}),r.a.createElement("span",null,t)):null,s=a?r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__GroupB"}),r.a.createElement("span",null,a)):null,c=n?r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__GroupC"}),r.a.createElement("span",null,n)):null,u=l?r.a.createElement("div",{className:"ColorKey__Item"},r.a.createElement("div",{className:"ColorKey__Box ColorKey__GroupD"}),r.a.createElement("span",null,l)):null;return r.a.createElement("div",{className:"ColorKey"},o,i,s,c,u)}),L=(a(35),function(e){var t=e.title,a=e.description,n=e.worstCase,l=e.avgCase,o=e.bestCase,i=e.space;return r.a.createElement("div",{className:"SortInfo"},r.a.createElement("hr",null),r.a.createElement("h1",null,t||"Select Algorithm"),r.a.createElement("div",{className:"SortInfo__Body"},r.a.createElement("article",{className:"SortInfo__Article"},a||r.a.createElement("p",null,"You must select an algorithm before you can visualize it's execution on an array of numbers.")),r.a.createElement("aside",{className:"SortInfo__Aside"},r.a.createElement("h3",null,"Performance"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Worst-case time complexity"),r.a.createElement("td",null,r.a.createElement("code",null,n))),r.a.createElement("tr",null,r.a.createElement("td",null,"Average time complexity"),r.a.createElement("td",null,r.a.createElement("code",null,l))),r.a.createElement("tr",null,r.a.createElement("td",null,"Best-case time complexity"),r.a.createElement("td",null,r.a.createElement("code",null,o))),r.a.createElement("tr",null,r.a.createElement("td",null,"Worst-case space complexity"),r.a.createElement("td",null,r.a.createElement("code",null,i))))))))}),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={trace:[],traceStep:-1,originalArray:[],array:[],groupA:[],groupB:[],groupC:[],groupD:[],sortedIndices:[],timeoutIds:[],playbackSpeed:1},e._reset=function(t){e.setState({array:t,trace:[],traceStep:-1,groupA:[],groupB:[],groupC:[],groupD:[],sortedIndices:[],originalArray:Object(i.a)(t)})},e.clearTimeouts=function(){e.state.timeoutIds.forEach((function(e){return clearTimeout(e)})),e.setState({timeoutIds:[]})},e._changeVisualState=function(t){e.setState({array:t.array,groupA:t.groupA,groupB:t.groupB,groupC:t.groupC,groupD:t.groupD,sortedIndices:t.sortedIndices})},e.run=function(t){var a=[],n=250/e.state.playbackSpeed;t.forEach((function(t,r){var l=setTimeout((function(t){e.setState((function(e){return{traceStep:e.traceStep+1}}),e._changeVisualState(t))}),r*n,t);a.push(l)}));var r=setTimeout(e.clearTimeouts,t.length*n);a.push(r),e.setState({timeoutIds:a})},e.pause=function(){e.clearTimeouts()},e.continue=function(){var t=e.state.trace.slice(e.state.traceStep);e.run(t)},e.stepForward=function(){var t=e.state.trace,a=e.state.traceStep;if(a<t.length-1){var n=t[a+1];e.setState({traceStep:a+1},e._changeVisualState(n))}},e.stepBackward=function(){var t=e.state.trace,a=e.state.traceStep;if(a>0){var n=t[a-1];e.setState({traceStep:a-1},e._changeVisualState(n))}},e.repeat=function(){e.clearTimeouts(),e.setState((function(e){return{array:Object(i.a)(e.originalArray),traceStep:-1,comparing:[],compared:[],sorted:[]}})),e.run(e.state.trace)},e.adjustPlaybackSpeed=function(t){var a=e.state.timeoutIds.length>0;e.pause();var n=Number(t.split("x")[0]);e.setState({playbackSpeed:n},(function(){a&&e.continue()}))},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){e.array!==this.props.array&&this._reset(this.props.array),e.trace!==this.props.trace&&(this.clearTimeouts(),this.setState({trace:this.props.trace}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"SortVisualizer"},r.a.createElement(x,{numbers:this.state.array,maxNum:Math.max.apply(Math,Object(i.a)(this.state.array)),groupA:this.state.groupA,groupB:this.state.groupB,groupC:this.state.groupC,groupD:this.state.groupD,sortedIndices:this.state.sortedIndices}),r.a.createElement("div",{className:"SortVisualizer__ProgressBar"},r.a.createElement(H,{width:this.state.trace.length>0?this.state.traceStep/(this.state.trace.length-1)*100:0})),r.a.createElement(K,{onPlay:-1===this.state.traceStep?this.run.bind(this,this.state.trace):this.continue.bind(this),onPause:this.pause.bind(this),onForward:this.stepForward.bind(this),onBackward:this.stepBackward.bind(this),onRepeat:this.repeat.bind(this),onAdjustSpeed:this.adjustPlaybackSpeed,playing:this.state.timeoutIds.length>0,playDisabled:this.state.traceStep>=this.state.trace.length-1&&-1!==this.state.traceStep||this.state.trace.length<=0,forwardDisabled:this.state.traceStep>=this.state.trace.length-1,backwardDisabled:this.state.traceStep<=0,repeatDisabled:this.state.traceStep<=0,playbackSpeed:this.state.playbackSpeed}),r.a.createElement(Q,this.props.colorKey),r.a.createElement(L,this.props.desc))}}]),a}(n.Component),V=(a(36),function(e){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("section",null,"Designed and Developed by "," ",r.a.createElement("a",{href:"https://github.com/sammed-sankonatti",target:"_blank",rel:"noopener noreferrer",className:"Footer__Link"},"Sammed.sankonatti")),r.a.createElement("section",{className:"Footer__Items"},r.a.createElement("a",{href:"https://github.com/sammed-sankonatti/sort-visualizer",target:"_blank",rel:"noopener noreferrer",className:"Footer__Link"},"Code")))}),G=function(e){return[{array:Object(i.a)(e),groupA:[],groupB:[],groupC:[],groupD:[],sortedIndices:[]}]},F=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];e.push({array:Object(i.a)(t),groupA:Object(i.a)(n),groupB:Object(i.a)(r),groupC:Object(i.a)(l),groupD:Object(i.a)(o),sortedIndices:Object(i.a)(a)})},q=function(e){return e[e.length-1].sortedIndices},W=function(e,t,a){var n=e[t];e[t]=e[a],e[a]=n},U=function(e,t){return Object(i.a)(Array(t-e).keys()).map((function(t){return t+e}))},Y=function(e,t,a,n){return{groupA:e,groupB:t,groupC:a,groupD:n}},J=Y("Comparing","Swapping"),$={title:"Bubble Sort",description:r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",rel:"noopener noreferrer"},"Bubble Sort")," ",'is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems'),worstCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),bestCase:r.a.createElement("span",null,"O(n)"),space:r.a.createElement("span",null,"O(1)")},X=function(e){for(var t=G(e),a=0;a<e.length;a++){for(var n=0;n<e.length-a-1;n++)F(t,e,q(t),[n,n+1]),e[n]>e[n+1]&&(W(e,n,n+1),F(t,e,q(t),[],[n,n+1]));F(t,e,[].concat(Object(i.a)(q(t)),[e.length-1-a]))}return t},Z=Y("Comparing","Swapping"),ee={title:"Selection Sort",description:r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Selection_sort",target:"_blank",rel:"noopener noreferrer"},"Selection Sort")," ","is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right."),worstCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),bestCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),space:r.a.createElement("span",null,"O(1)")},te=function(e){for(var t=G(e),a=0;a<e.length-1;a++){for(var n=a,r=a+1;r<e.length;r++)F(t,e,q(t),[n,r]),e[r]<e[n]&&(F(t,e,q(t),[n],[r]),n=r,F(t,e,q(t),[n],[r]));F(t,e,q(t),[],[a,n]),W(e,a,n),F(t,e,[].concat(Object(i.a)(q(t)),[a]),[],[])}return F(t,e,[].concat(Object(i.a)(q(t)),[e.length-1])),t},ae=Y("Comparing","Swapping","Overwrite from memory"),ne={title:"Insertion Sort",description:r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",rel:"noopener noreferrer"},"Insertion Sort")," ","is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort."),worstCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(n",r.a.createElement("sup",null,"2"),")"),bestCase:r.a.createElement("span",null,"O(n)"),space:r.a.createElement("span",null,"O(1)")},re=function(e){for(var t=G(e),a=1;a<e.length;a++){var n=e[a],r=a;for(F(t,e,[],[a]);r>0&&e[r-1]>n;)F(t,e,[],[r],[r-1]),e[r]=e[r-1],F(t,e,[],[],[r-=1,r+1]);F(t,e,[],[],[],[r]),e[r]=n,F(t,e,[],[],[],[r])}return F(t,e,Object(i.a)(Array(e.length).keys())),t},le=Y("Call Merge Sort",null,"Overwrite from axillary array"),oe={title:"Merge Sort",description:r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Merge_sort",target:"_blank",rel:"noopener noreferrer"},"Merge Sort")," ","is an efficient, stable sorting algorith that makes use of the divide and conquer strategy. Conceptually the algorithm works as follows:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Divide the unsorted list into ",r.a.createElement("em",null,"n")," sublists, each containing one element(a list of one element is considered sorted)"),r.a.createElement("li",null,"Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list."))),worstCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),avgCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),bestCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),space:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),")")},ie=function(e){var t=G(e);return function e(a,n,r){var l=r-n;if(l<2)return l<1?a:[a[n]];var o=Math.floor((n+r)/2);F(t,a,[],Object(i.a)(Array(o-n).keys()).map((function(e){return e+n}))),e(a,n,o),F(t,a,[],Object(i.a)(Array(r-o).keys()).map((function(e){return e+o}))),e(a,o,r),function(e,a,n,r){for(var l=e.slice(a,n),o=e.slice(n,r),i=0,s=0,c=0;i<l.length&&s<o.length;)l[i]<=o[s]?(F(t,e,[],[],[],[c+a]),e[c+a]=l[i],i++,F(t,e,[],[],[],[c+a])):(F(t,e,[],[],[],[c+a]),e[c+a]=o[s],s++,F(t,e,[],[],[],[c+a])),c++;for(;i<l.length;)F(t,e,[],[],[],[c+a]),e[c+a]=l[i],i++,c++,F(t,e,[],[],[],[c+a]);for(;s<o.length;)F(t,e,[],[],[],[c+a]),e[c+a]=o[s],s++,c++,F(t,e,[],[],[],[c+a]);l.length=0,o.length=0}(a,n,o,r)}(e,0,e.length),F(t,e,Object(i.a)(Array(e.length).keys())),t},se=Y("Comparing","Swapping",null,"Less than pivot"),ce={title:"Quick Sort",description:r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Quicksort",target:"_blank",rel:"noopener noreferrer"},"Quick Sort")," ","is an efficient, in-place sorting algorith that in practice is faster than MergeSort and HeapSort. However, it is not a stable sorting algorithm, meaning that the relative positioning of equal sort items is not preserved.Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays. The steps are:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Pick an element, called a pivot, from the array. This is usually done at random."),r.a.createElement("li",null,"Move pivot element to the start of the array."),r.a.createElement("li",null,r.a.createElement("em",null,"Partitioning:")," reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the"," ",r.a.createElement("em",null,"partition")," operation."),r.a.createElement("li",null,"Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.")),r.a.createElement("p",null,"The base case of the recursion is an array of size zero or one, which are sorted by definition.")),worstCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),"log",r.a.createElement("em",null,"n"),")"),bestCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),"log",r.a.createElement("em",null,"n"),")"),space:r.a.createElement("span",null,"O(log",r.a.createElement("em",null,"n"),")")},ue=function(e){var t=G(e);return function e(a,n,r){if(n>=r)return n===r&&F(t,a,[].concat(Object(i.a)(q(t)),[n])),null;var l=function(e,t,a){return Math.floor(Math.random()*(a-t))+t}(0,n,r);F(t,a,q(t),[l]),W(a,n,l),F(t,a,q(t),[l]),l=function(e,a,n){var r=a+1,l=a+1;for(F(t,e,q(t),[a]);l<=n;)e[l]<e[a]&&(F(t,e,q(t),[a],[l],[],U(a+1,r)),W(e,r,l),F(t,e,q(t),[a],[r],[],U(a+1,r)),r+=1),l+=1;return F(t,e,q(t),[r-1],[],[],U(a,r-1)),W(e,a,r-1),F(t,e,q(t),[r-1],[],[],U(a,r-1)),r-1}(a,n,r),F(t,a,[].concat(Object(i.a)(q(t)),[l])),e(a,n,l-1),e(a,l+1,r)}(e,0,e.length-1),t},me=a(13),pe=Y("Comparing","Swapping",null,"Less than pivot"),he={title:"Quick Sort 3-Way Partitioning",description:r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Quicksort#Repeated_elements",target:"_blank",rel:"noopener noreferrer"},"Quick Sort")," ","exhibits poor performance on arrays that contain many repeated elements. This issue (",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Dutch_national_flag_problem",target:"_blank",rel:"noopener noreferrer"},"Dutch national flag problem"),") can be solved by using an alternative linear-time partitioning routine that separates the values into three groups: values less than the pivot, values equal to the pivot, and values greater than the pivot. The values equal to the pivot are already sorted, so only the less-than and greater-than partitions need to be recursively sorted.")),worstCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),bestCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),")"),space:r.a.createElement("span",null,"O(log ",r.a.createElement("em",null,"n"),")")},de=function(e){var t=G(e);return function e(a,n,r){if(n>=r-1)return n===r-1&&F(t,a,[].concat(Object(i.a)(q(t)),[n])),null;var l=function(e,t,a){return Math.floor(Math.random()*(a-t))+t}(0,n,r);F(t,a,q(t),[l]),W(a,n,l),F(t,a,q(t),[l]);var o=function(e,a,n){var r=e[a],l=a+1,o=a+1,s=a+1;for(F(t,e,q(t),[a]);s<n;)e[s]===r?(F(t,e,q(t),[a].concat(Object(i.a)(U(a,l))),[s],[],U(l,o)),W(e,l,s),F(t,e,q(t),[a].concat(Object(i.a)(U(a,l))),[l],[],U(l,o)),o>l&&W(e,o,s),l+=1,o+=1):e[s]<r&&(F(t,e,q(t),[a].concat(Object(i.a)(U(a,l))),[s],[],U(l,o)),W(e,o,s),F(t,e,q(t),[a].concat(Object(i.a)(U(a,l))),[o],[],U(l,o)),o+=1),s+=1;var c=l-a;for(l-=1,o-=1;l>=a;)W(e,l,o),l-=1,o-=1;return F(t,e,q(t),U(o+1,o+1+c),[],[],U(a,o+1)),[o+1,o+1+c]}(a,n,r),s=Object(me.a)(o,2),c=s[0],u=s[1];F(t,a,[].concat(Object(i.a)(q(t)),Object(i.a)(U(c,u)))),e(a,n,c),e(a,u,r)}(e,0,e.length),t},ge=Y("Comparing","Swapping",null,"Heap Built"),fe={title:"Heap Sort",description:r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Heapsort",target:"_blank",rel:"noopener noreferrer"},"Heap Sort")," ","can be thought of as an improved selection sort that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. It is an in-place sorting algorithm that is not stable and has a somewhat slower running time than Quicksort in practice."),r.a.createElement("p",null,"The heapsort algorithm can be divided into two parts. In the first step, a heap is built out of the data. The heap is often placed in an array with the layout of a complete binary tree. In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array."),r.a.createElement("ol",null,r.a.createElement("li",null,"Call the buildMaxHeap() function on the list. Also referred to as heapify(), this builds a heap from a list in O(n) operations."),r.a.createElement("li",null,"Swap the first element of the list with the final element. Decrease the considered range of the list by one."),r.a.createElement("li",null,"Call the ",r.a.createElement("em",null,"siftDown()"),", also called"," ",r.a.createElement("em",null,"maxHeapify()")," function on the list to sift the new first element to its appropriate index in the heap."),r.a.createElement("li",null,"Go to step (2) unless the considered range of the list is one element."))),worstCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),avgCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),bestCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),space:r.a.createElement("span",null,"O(1)")},Ee=function(e){var t=G(e),a=function e(a,n,r){var l=function(e){return 2*e+1}(n),o=function(e){return 2*e+2}(n);F(t,a,q(t),[n,l]);var i=l<r&&a[l]>a[n]?l:n;F(t,a,q(t),[i,o]),o<r&&a[o]>a[i]&&(i=o),i!==n&&(F(t,a,q(t),[],[n,i]),W(a,n,i),F(t,a,q(t),[],[n,i]),e(a,i,r))};return function(e){!function(e){for(var n=Math.floor(e.length/2),r=e.length,l=n;l>=0;l--)a(e,l,r);F(t,e,q(t),[],[],[],U(0,e.length))}(e);for(var n=e.length,r=e.length-1;r>0;r--)F(t,e,q(t),[],[0,r]),W(e,0,r),n-=1,F(t,e,[].concat(Object(i.a)(q(t)),[r]),[],[0,r]),a(e,0,n),F(t,e,q(t),[],[],[],U(0,n));F(t,e,[].concat(Object(i.a)(q(t)),[0]))}(e),t},ve=Y("Comparing","Swapping"),be={title:"Shell Sort",description:r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Shellsort",target:"_blank",rel:"noopener noreferrer"},"Shell Sort"),", also know as Shell's method is a generalization of insertion sort where elements ",r.a.createElement("em",null,"gap")," distance apart are compared rather than adjacent elements. The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. The running time of Shellsort is heavily dependent on the gap sequence it uses. For many practical variants, determining their time complexity remains an open problem. It is in-place sorting algorithm that is not stable.")),worstCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),r.a.createElement("sup",null,"2"),")"),avgCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n"),r.a.createElement("sup",null,"3/2"),")"),bestCase:r.a.createElement("span",null,"O(",r.a.createElement("em",null,"n")," log ",r.a.createElement("em",null,"n"),")"),space:r.a.createElement("span",null,"O(1)")},ye=function(e){for(var t=G(e),a=Math.floor(e.length/2);a>0;a=Math.floor(a/2))for(var n=a;n<e.length;n++)for(var r=n-a;r>=0&&(F(t,e,[],[r,r+a]),e[r+a]<e[r]);r-=a)F(t,e,[],[],[r,r+a]),W(e,r,r+a),F(t,e,[],[],[r,r+a]);return F(t,e,U(0,e.length)),t},Se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={darkMode:!1,array:[],arraySize:10,trace:[],algorithm:null,appDrawerOpen:!1},e.ALGORITHM={"Bubble Sort":X,"Selection Sort":te,"Insertion Sort":re,"Merge Sort":ie,"Quick Sort":ue,"Quick Sort 3":de,"Heap Sort":Ee,"Shell Sort":ye},e.ALGORITHM_KEY={"Bubble Sort":J,"Selection Sort":Z,"Insertion Sort":ae,"Merge Sort":le,"Quick Sort":se,"Quick Sort 3":pe,"Heap Sort":ge,"Shell Sort":ve},e.ALGORITHM_DESC={"Bubble Sort":$,"Selection Sort":ee,"Insertion Sort":ne,"Merge Sort":oe,"Quick Sort":ce,"Quick Sort 3":he,"Heap Sort":fe,"Shell Sort":be},e.generateRandomArray=function(){var t=Array(e.state.arraySize).fill(0).map((function(){return t=5*e.state.arraySize,Math.floor(Math.random()*Math.floor(t))+1;var t}));e.setState({array:t,trace:[]},e.createTrace)},e.handleAlgorithmChange=function(t){e.setState({algorithm:t},e.generateRandomArray)},e.handleArraySizeChange=function(t){t=(t=(t=Number(t))>100?100:t)<0?0:t,e.setState({arraySize:t},e.generateRandomArray)},e.createTrace=function(){var t=Object(i.a)(e.state.array),a=e.ALGORITHM[e.state.algorithm];if(a){var n=a(t);e.setState({trace:n})}},e.toggleDarkMode=function(){e.setState((function(e){return{darkMode:!e.darkMode}}))},e.toggleAppDrawer=function(){e.setState((function(e){return{appDrawerOpen:!e.appDrawerOpen}}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generateRandomArray()}},{key:"render",value:function(){var e="App";this.state.darkMode&&(e+=" App_dark"),this.state.appDrawerOpen&&(e+=" App_modal_open");var t=this.ALGORITHM_KEY[this.state.algorithm],a=this.ALGORITHM_DESC[this.state.algorithm],n=r.a.createElement(D,{onGenerateRandomArray:this.generateRandomArray,algorithm:this.state.algorithm,onAlgorithmChange:this.handleAlgorithmChange,arraySize:this.state.arraySize,onArraySizeChange:this.handleArraySizeChange,onToggleDarkMode:this.toggleDarkMode,darkMode:this.state.darkMode});return r.a.createElement("div",{className:e},r.a.createElement(I,{drawerOpen:this.state.appDrawerOpen,toggleDrawer:this.toggleAppDrawer},n),r.a.createElement(M,{open:this.state.appDrawerOpen,closeDrawer:this.toggleAppDrawer},n),r.a.createElement("main",{className:"App__Body"},r.a.createElement(P,{array:this.state.array,trace:this.state.trace,colorKey:t,desc:a})),r.a.createElement(V,null))}}]),a}(n.Component),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ke(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(Se,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sorting-visualizer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sorting-visualizer","/service-worker.js");_e?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ke(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ke(t,e)}))}}()}],[[14,1,2]]]);
//# sourceMappingURL=main.abb654f9.chunk.js.map