(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{103:function(e,A,t){"use strict";t.d(A,"a",(function(){return d}));var n=t(0),a=t.n(n);function o(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function r(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?r(Object(t),!0).forEach((function(A){o(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function s(e,A){if(null==e)return{};var t,n,a=function(e,A){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],A.indexOf(t)>=0||(a[t]=e[t]);return a}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var A=a.a.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):i({},A,{},e)),t},g={inlineCode:"code",wrapper:function(e){var A=e.children;return a.a.createElement(a.a.Fragment,{},A)}},c=Object(n.forwardRef)((function(e,A){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,h=c["".concat(r,".").concat(d)]||c[d]||g[d]||o;return t?a.a.createElement(h,i({ref:A},l,{components:t})):a.a.createElement(h,i({ref:A},l))}));function d(e,A){var t=arguments,n=A&&A.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=c;var i={};for(var s in A)hasOwnProperty.call(A,s)&&(i[s]=A[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<o;l++)r[l]=t[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},133:function(e,A,t){"use strict";t.r(A),A.default="data:image/png;base64,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"},134:function(e,A,t){"use strict";t.r(A),A.default=t.p+"assets/images/sincal-options-dialog-a0657466486ba31070408881b8208728.png"},135:function(e,A,t){"use strict";t.r(A),A.default=t.p+"assets/images/sincal-background-map-menu-e2ac5c60e3ebe1dad7d7b32fcb7b9afa.png"},136:function(e,A,t){"use strict";t.r(A),A.default=t.p+"assets/images/sincal-position-dialog-bb6da3c2684b71b9c16d68d6982c6de7.png"},137:function(e,A,t){"use strict";t.r(A),A.default=t.p+"assets/images/sincal-fitin-dialog-75ff5964760f45561cd409039f0f414e.png"},138:function(e,A,t){"use strict";t.r(A),A.default="data:image/png;base64,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"},139:function(e,A,t){"use strict";t.r(A),A.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAAF7CAMAAABVWCofAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAUHCBAQEAAAMwAANgAAOgA6OjMAADYAADoAADMAMzYANjoAOiAgIC4uLS8vLzAwMDMzMzc3Nzg4ODo6Ojw8Oz09PQAAWgAAYAAAZgA6ZgAzfzMAWjYAYDoAZjo6ZjMzfwBaWgBgYABmZloAAFoAM2AAAGYAAGAANmYAOn8zAGY6On8zM1oAWlozf2AAYGYAZn8zWlpaM2BgNmZmOkBAQENDQ0VFRUhISElJSU1MS01NTU9OTVBQUFJSUlNTU1RUVFVVVVZWVVpaWlxbWn9/WmFgYGNiYWJiYmNjY2ZmZmtra2trbGxraWxram1sam1sa25tbG1tbW1tbnBwcHFxcXR0dHl5eXp6ent7e39/fwA2hwA6kDY2hzo6kABaoABgqwBmtjNaoDZghzZgqzpmtgB41zN/wWA2h2Y6kH9/wTaHhzqQkDaHzjqQ22aQkFqg4WCr8Ga2/3/BoH/B4Yc2AJA6AIc2NpA6Ooc2YJA6ZqBaAKtgALZmAKtgNv8tMcF/M7aQOoeHYJCQZs6HNtuQOuGgWvCrYP+2ZuHBf4GBgYODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI+Pj5+fn5C2kKCgoK2tra+vr7Kysra2tre3t7i4uLm5ubq6uru7u7y8vL6+vr+/v5CQ25C2/4fOq5DbtqDhoKvwq7b/tofO8JDb/7b/26Dh4avw8Lb///+2kMHhoM7wq9v/tvDOh//bkOHhoPDwq///tsDAwMLCwsTExMbGxsnJycvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NbW1tfX19nZ2dvb29/f38Hh4c7w8Nv//+HhwfDwzv//2+Hh4enp6erq6u3t7e/v7/Dw8Pr6+vv7+/z8/P39/f7+/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDSOuEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAABTESURBVHhe7Z2Nn1xXWccvYoQooiFKjVVEk3SbAhJphVYstKhIjKEoSGobW6Kt+FLWZm2WmHQgajbZWF8KCII2bcUK1jStEcwm62tKWt8pSSYUUoT5U3ze7uvcO3Pv7NydO8/9fT8zc86cOfec2fPdc+bu7DnnBv/73//1n//+7DPnvvD02bP/BqaXs2ef/sK5Z/8j2A5cEWzvAU9AqDMg1BkQ6gwIdQaEOgNCnQGhzoBQZ0BoU/jitwfBj37VngwmOKvh2UDDJLHQ5ZkgWHPCnvSxGAQbTloc1MFjt331z4OP25PBnH2RGLUgTULolhO9hV3n7VmGpVed7C19RuOcEdTCd95mkSGIylyfGaGFrhYTpiG0Lj4enLPYMEhmvs8coZ0g2E1dcm1wDz2hQEba5ZlZzsNPj9PQvNsyL2/5s7WBvAJWzieCT1hsOGdflO8zd8hlUzNzvYU1JOxEb1GEdeeDOcmyOMuPdl+e2XV+6WXosOPhm8p9ggplhFLP495Ipz9rTizdcZ6FUY+U/sosrZ3Tp0mhFPQ6c5oBrJDgMYsMp+yQS9DpT3dfJJTOhSIWdutTk8l3DrrzEDoeHvuiRYYiMvON9gml0x8aRMMhVz86e72/Z3Gz+jS0uKivp6SDFXBb2R5qKnON9gmlD8vvfQ19VAaBnRTJkMvjsZ4qUdChO72+kXvodQF9toKxELzdIsMo98VCHyW6nv0SgOYwQGin6FuGGAhtHMFNFklDA2+Zr/ogtHEM6KFgGoFQZ0CoM4I3WgT4IHiPRYAPINQZEOoMCHVG8J7LwBMQ6gwIdQaEOgNCnQGhzoBQZ4RC/2eFaClg4kRC7e/SEYHQpjAuoe1G27ARTKSHjqUBRiuklraHUAtXBITmAqFjoMlCBy77lWUvy1tzZgNCaFPoE7rlRG+xYALngHVmENoUgjdqmBS6vPXJ+YCXfVJ35fUQFMgKtGit0oKsSQuTGf2RjgTBNz8hMeXM1clnMdYAZ64K8595/d9JSnxIoqiCUqJC3sfBoVTFSlxqTHgUl5lTcDbpQ5+l9xh8wJ4Zfcc1Suh2DZNCZZUoj6ydWV6x1OvMdfdJ31zgdSwyuVpeDZMJ+ZFOfVvmBy1QkWzVI9+TbnQ7JFlUQSmRUC7h4t4coXlUE3rqlz6fU3nfcY0WqqtE9dOSeyev6qVfUl2RxAt8RWhnTnJGC5VU6PeLHOp477u4l3+v+SfnZ5yaJNGqZ17/t1dfezs125mrf48O4U7L/SFRlCRJVsu0h19JFHItHXDkN69+Iqzz2tu/RMdQQngAvX4osF+crFB5e3okx38oTJJiLh/aIxnlJf6NkYAeuJ44V7OFsi5eU8gmTagkKd35OX66SGNtMtmG3EPS2PerQBrwuDXu33Pxg9lf8kSrHrr981eJeR46qbtaA4ZF8cGcZHfLJDmiQj77a1+ioVGO4zqpuMv3f4DH4ESp0eAbHsUjKTsK3x7noKOOhElSzMXfoeIo3x55idRpIO8xztUwoTdpmBG6m1d/dudnwyBEhcqJbjI5PCk6c5X9uPoZKC0qDZIm0aqqkDPGgb0oHY0OtlcSmSRDJPSJ+/ecuotTwzoTuS12cW84SsRHyYO9veSRcaWXj+ggo9n5pUQQ52qY0NweSsPpRoosrQ0DOe/V1aGUo0M/zK7zYTIT/kgX91pTiFj74ftItmpOYylhUWGGRCZ5PS7k1F0yNEZ1JnKHzy4fyh9yJYzfbZwkjx8Ka0u8FAdhrmYLzVK4c1GahNCLe2kYOkIjnfzOy7MsZYXqwZxET6RAGuIO8acWERdy8YO/wkKiOim3DJ4U5Wd8vxyO+xmhWoMeaUfFlZ66yzLKGJ4ecuNcxNQIpT9PivcWSyE/0qmXBnwCRKMRn8nQ+YW0ykvD85GYAUIv368nRVqUHsxJNChKgdfyB5+QKESHxrhOPk6j/ExfsjE3I1Rr0CPtKEuiyCH6qJCMFCROikgvvaEoFzE1QstT7UcauQGsAYUhhYQdOUOFqs/QyVY5INTCypQVeij+WiJDLW0PoRauiNEKgdByQGhTGJdQMGFU49iEggkDoc6AUGdAqDMg1BkQ6gwIdQaEOiMWmvkHN5hOYqFv1RBCpxsIdQaEOgNCnQGhzoBQZ0CoMyDUGRDqDAh1BoQ6o4xQXi84wup8MAlKCd0y0up8MAnKCq2yOp8XjYIJUVZoldX5kdBPgrqwFu6n7GfoCKvzwSQo20NHWJ0PJkEFoaVX5+MzdIKUF0rDacnV+RA6QcoIzVJydT6YBJWFll+dDybBKD0UNBgIdQaEOgNCnQGhzoBQZ0CoMyDUGRDqDAh1BoQ6A0KdAaHOgFBnQKgzIHQQQWOwNzScEYSe23nD+ht2nrNnrinfjjVTo9D/e3DbsS+/8OVj2x78mqU4pg1CH/joNyT8xscekNA1LRD6zDss0uu94xl+jKZf99GXmEiYktVNLRB660MW6fUe2kkPulipstApoQVC3/QVi/R6z19PD7JYiVdAzHZlMdPylt8P1zRt3HIiTLtu13mb1kssBBtOktv+a482jxYIXWch8cJ6fowXK1Gw9eTyzG5ZetiRCfZhGhlOJtgBHEtee7R5tLCHkpZwsVJqMZMGqTS12OvOh4tgmr+6qQVCdx6zSK93jD9DiXCxUnYxE91TaSaUOrUMudOwuqkFQs9t+7rFvr7NvluIV5/RmGribE1TnGYJesA+TpKhN7noqYG0QGjvIx8L/w79CAe6WKnXCWb1rMeE2pqmOC1c5MRDdN/qJi6okbRB6Nce3Hbs+ReexzdFq0qNQvm73OvXX4/vcleVWoW2CAh1BoQ6A0KdAaHOgFBntEMopqCsPjUKxRSUSVCjUExBmQT1CeUpKI/evP7mR8MpKPwfMv6Pdox8dTsK8nV9o2iB0Fsf6n16HfOoTkHJ2Uh3ZKHNowVC3/SV3s0i9Gb9B3dX5xuwRL4vBBuO83wU/p/KGk66Lpjt6CQTmZwy19NZKfx6ctvdhs5LaYHQdb3eehG6XqegLN0h28SZ0Hh6Cc844YlEs0tr52yTZJucQjGeepLedjc+UF5syryUFvbQtNBoeondo1ucJX/b3YbOS2mB0J3Hen8pQh/RKSgiIbYVTi+xe3SLsxRtu9vIeSktEMpTUB656RU3PRJOQeGtOZf/ujs/pzNMujK9JBpyk0JnaJTddV5npdiMlMQMFD1Qht7mzEtpgdDsFBQ+neFJJDSQ6pQT6mGdxElRQiidIHFS7ra7ciDla9i8lDYIHXkKimpNMAXb7rZB6MhTUNJCp2Pb3XYIbREQ6gwIdQaEOgNCnQGhzoBQZ0CoMyDUGRDqDAh1BoQ6A0KdAaHOgFBnQKgzINQZEOoMCHUGhDoDQp0Boc6AUGdAqDNaILQT7l+9uOsfeB2KPOOEvonxY0FKjYqWlS8a06R6Ko1pgVBeHbb4XbO93kK4oIgaldu1nraVUnOKtqR6Ko1pgVBeD9r5rTvOd3WVmSw9+htes21XD2DhYyQSGq5m4sg9/CvEtVE8mB1zjSlaIJREdvc/uf8kieXm1UsDaEPLAu1xC+W1v7wKRhZ1W40LVKPWxgkQmqLySdHC7NLd1LyLfPWOcKy1QO7jRUrkGmRRN0dSNXJQJ20QunTH785Rr+CV89nmlft4kRKthiiSDuqkDUK7+37gZG/5Na+iB95TIR5y9V7TZ6gu6rZIXCMHGHJTVBaq63Q71IrcmrYQm68hoE1ck1Bd6h3XaLVxxRCaorrQybN6S78htH5Wdek3hDqjBUJvHTdWbgGWaXxYuSVpg1ALx8UwoRaOCwjNAqETAUILgNAsEDoRILQACM2iLcL7FNu+5LIZLj2nZ50wrQLlhFLJuvlfd57+CtXaE++hPBCaJWqR7n5u4e78t5DQxV38/9Glz+g3dZUoJZQKl5DMmkGrXR6rAKFZohZZtKblaSE8e0FmMGjLRxuTJ3coLyDdwvzPzlTujFDbbjmsXR9Hr24oLRIadQ4Wyj1U/h1CEU4KNyZP7lCegkdLfY/pFl7eejyaNiSYUN2nnsrfOBNwFakOOnp1Q5lqoW/RsKTQ6H8cMnGrE6y5jlpcfVJP4f+GJG+SM0nYwNkWXsh8KkYvayG8Zz2Pulq7vYdkRXqT5CRF1Q1jqoXeqGFJoTz7Twhn4lFCOFpmmpdump4kfIeZFl7M7DUfvywVskK+a+32HjJ10U2SUxRUN4ypFvpmDcsJTUyo1Bh1zqW7JaFcC4ekW7hgyCW0EH6kHqp1hu8hqiW6SXIubRJ6g4blhMrZiYyw3KzLM/xXRfR3RKZ56aYH5ZFu4YKToqW1fJUIrm5Rrsmv50bhGVKmLrpJci5tEvpKDUsOuUw07K6AIS28ytVlmWqh79KwvNB42F0B5YWuRnVZ2iV0LJQXOhYgNAuETgQILQBCs9hMjvFh5RZgmcaHlVuSFghtFxDqDAh1BoQ6Y6qFbtcQQhOghzoDQp0Boc6AUGdAqDMg1BkQ6gwIdQaEOmOqheKbon7QQ50Boc6AUGdAqDMg1BkQ6gxe3NEM7A0NB0KdAaHOgFBnxELxTZEL0EOdAaHOgFBnQKgzILQM4fYRefvg6bYPyccEuqdd7oZ2A48bHQgtSXf/ydx98OixO8+XCIoeNb9AGTnI29Bu4HErAEJLItvQ8T4PmX3weNukBbnWSPhIieFuLpold0O73OOq7HJXAISWw7oVCeUemtgHj0Us7k4+Sj7db0n3tMvd0C7/uKG73A0FQssh7a07saT3wcsVk9jijobT3A3tco+jzJmb5K1CLBTfFA1CN0kKt9ahZ+EGWSyib+iks5zoI7Ezx8l81zJsu6Xc4zI26SZ5q4AeWgozaQF1Tt0Hj57TsNilc6TEo6RHW9yZl/SGdoXHpW3STcqoAoSWws5r2EZyHzx+Tn9y8IiZeKReaCdFuqed/VWS2NCu6LiMTbpxaiUg1BkQ6gwIdQaEOgNCnQGhzoBQZ8RC8U2RC9BDnQGhzoBQZ0CoMyDUGRDqDAh1BoQ6A0KdEQvFN0UuiIX+tIYQOt3EQl+uIYRON7HQt2kIodMNToqcAaHOgFBnQKgzINQZEOqMWCi+KXIBeqgzINQZEOoMCHUGhDoDQp1RTujSy2xtOK8Tl60CImzZ+PJMEKwpWkC+yK9ljgP1UE7ows/IFgCRvgShUAp4+5Y8ol8HUD+lhHb3H/913uphJtgYbebA94Vgw3HqmSxbkrY+KRstccZ7+PmMboW1JPsnUQ7eaWK3JvNOLqAGSgldult21+nM9hZp6IyEyiDKcYKDBd6KiRN5ExAafztzXd3rboG3ApGM8ionR0I/CUbBWq+fWOiAr/7IJgkINUZCu/NkheMEf4bSiKuflpaRkmz/peWZXeclI5WUSAbjp0wPFQUbToaeIqHU9TSV80iwKN7sZXtF0C0nZaBNJoOxU0aoDI80UM6HQy7vBUox8rQv1KYB5aR0y6hbHCoqVMZo2/kQn6H1UEao7E5HBpbW2kkRj6wck5OeTnRSJH2Z0i0jB3Ley/tpyYjdoZ6+67wkQ2hNlDopSlH0x0kaOUECq09VodQHh5/Q0J8nhV8ygHqp3kNBo4FQZ0CoMyDUGbFQTBJzAXqoMyDUGRDqDAh1BoQ6o5rQD68SVh2oDoQ6A0KdAaHOiIWW+abI2rt2rDpQnRF66KVakSqsOlAdCHUGhDoDQp0Boc6AUGfUIPTot96nkdOb7zv9uqc0rlCKxQqRKqw6UJ0ahB78ifdrpF8fhNbO+IVe+JHHf/g5crcp+EHqoXITkQeDKx7fFAQmuxCpwqoD1YmFlv6myFq+iKO/fOnAvZcuHXj/pcMvTgiVwZfjQ5AqrDpQnfH3ULJ5+E5RpzYtduGaOyF0FRi7UBpqg+CKp0yj3lTkQU0dglRh1YHqjF0o9U7upReuCYfcC9dQl30xibzwWpE7BKnCqgPVGbtQ/vxkq0dfYidFlw4HEtsUkOoDOCmqmfF/hqY4fEXq79ASSBVWHahOrUKpV3J/rYRUYdWB6tTcQ6sjVVh1oDoQ6gwIdUYs9BUaDhf6qVqRKqw6UJ1Y6Ns1HC50FbDqQHVGGHJXAasOVAdCnQGhzoBQZ1QTChoPhDoDQp0Boc6IhWKfIheghzoDQp0Boc6Ihe7QEEKnGwh1Riz0nRpC6HSDz1BnQKgzINQZsVB8U+QC9FBnQKgzINQZEOoMCHUGhDoDQp0Boc6AUGfEQvFNkQv6eyiYblRjLBQ4AUKdAaHOgFBnQKgzINQZEOoMCHVG+E2RU351XFh5l21bpZVj5Y29QOc91HSsHCvv8qds57OVEgu1hJXSGqH2864MCG0KEOoMCHUGhDoDQp0xROjhQK75xNc8OMCXtShiiFArJp/8S2IUCeXLpfC1NCgWXT+uxEU1IFQ4eMVTl/hKQdRicpmSQgYLHXzJhIpC+XoamfIgNGag0Auv5YY6+n1Pnd782+nLKWYZKFSLod8M7qanN/+Udnq+vIk+VBZ6+nWPb37DlZ/jq6VwYdxpqWAt6w1XPmc5M0RCvX9TZD9vHqSSHi9cc+/pzesG94GBQo++OmxjGiVPb7pTepiM4AfuLbwK0SChB6/83Cb+1bjPCpMStCxKLyAS+nMW8UkZodxOxR+BQimh9Ekq15QSFeyAu1ZAvy2VhNIxySuORcGAsgQI1d4QDrnFLcUMFGqtfPjK58LGD4XKC/qYZVAP1Ue6p4Po1VwglNCTIhndSIcl5jH4pOggHXv6N+i0Sq/6xsVxqVL0uITGZfG4LjfJHwGhzMHEny2DjA4WysXQMBleClebnc9hjr7Ehs9+qgiVS8dFZUHoGBgidASKhI4MhFYBQpsChDoDQp1h8w1WjpU3BUIxp6gUVh7mFIFVBkKdAaHOCDdABk6AUGdAqDMg1BkQ6oxgx44d7xK2a0BIjNJ3vHP7jh23SFL86i1RbMcOelkzcszYbgf0FSiEsZen0m7ht3ALHasJRHGM31DRqz/53RL72Xe/e/uP/XiYqIwz9sob3nzjW97aUIJnn/7Xf/nnf/rHx/7q048+8vBq8RfrLDJmvsPChx9+7y9YpAZu/Pn3/uIfPNA0/vCP/vhPHvzon/4/Nf4k42q8V7YAAAAASUVORK5CYII="},140:function(e,A,t){"use strict";t.r(A),A.default=t.p+"assets/images/sincal-map-fitin-24465b8d22083d1bda1a3e26e6259cf2.png"},85:function(e,A,t){"use strict";t.r(A),t.d(A,"frontMatter",(function(){return r})),t.d(A,"metadata",(function(){return i})),t.d(A,"toc",(function(){return s})),t.d(A,"default",(function(){return p}));var n=t(3),a=t(7),o=(t(0),t(103)),r={id:"map-underlay",title:"Adding Map Underlay"},i={unversionedId:"map-underlay",id:"version-2.10.1/map-underlay",isDocsHomePage:!1,title:"Adding Map Underlay",description:"When selecting Geographic as export type, a map can be inserted into the background in SINCAL.",source:"@site/versioned_docs/version-2.10.1/map-underlay.md",slug:"/map-underlay",permalink:"/evolve/docs/sincal-exporter/2.10.1/map-underlay",version:"2.10.1",sidebar:"version-2.10.1/sidebar",previous:{title:"Using Model",permalink:"/evolve/docs/sincal-exporter/2.10.1/using-model"}},s=[{value:"Adding MapBox API Key",id:"adding-mapbox-api-key",children:[]},{value:"Inserting background map",id:"inserting-background-map",children:[]}],l={toc:s};function p(e){var A=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,r,{components:A,mdxType:"MDXLayout"}),Object(o.a)("p",null,"When selecting ",Object(o.a)("strong",{parentName:"p"},"Geographic")," as export type, a map can be inserted into the background in SINCAL."),Object(o.a)("h3",{id:"adding-mapbox-api-key"},"Adding MapBox API Key"),Object(o.a)("p",null,"Go to the ",Object(o.a)("strong",{parentName:"p"},"Options")," dialog."),Object(o.a)("p",null,Object(o.a)("img",{src:t(133).default})),Object(o.a)("p",null,"In ",Object(o.a)("strong",{parentName:"p"},"Background Maps")," tab, fill the MapBox ",Object(o.a)("strong",{parentName:"p"},"Server URL")," (",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://api.mapbox.com/styles/v1/mapbox/"}),"https://api.mapbox.com/styles/v1/mapbox/"),") and ",Object(o.a)("strong",{parentName:"p"},"API key"),"."),Object(o.a)("p",null,Object(o.a)("img",{src:t(134).default})),Object(o.a)("h3",{id:"inserting-background-map"},"Inserting background map"),Object(o.a)("p",null,"In SINCAL, go to ",Object(o.a)("strong",{parentName:"p"},"Tools")," -> ",Object(o.a)("strong",{parentName:"p"},"Background Map")),Object(o.a)("p",null,Object(o.a)("img",{src:t(135).default})),Object(o.a)("p",null,"In the ",Object(o.a)("strong",{parentName:"p"},"Position")," tab under ",Object(o.a)("strong",{parentName:"p"},"Position in graphic view"),", select ",Object(o.a)("strong",{parentName:"p"},"Node")," then press the dropdown beside it to show the following dialog."),Object(o.a)("p",null,Object(o.a)("img",{src:t(136).default})),Object(o.a)("p",null,"Search for nodes that starts with ",Object(o.a)("strong",{parentName:"p"},"FN")," and select one, then press ",Object(o.a)("strong",{parentName:"p"},"Select"),". Press ",Object(o.a)("strong",{parentName:"p"},"Apply")," to load the map and close the dialog."),Object(o.a)("p",null,"Go to ",Object(o.a)("strong",{parentName:"p"},"Tools")," -> ",Object(o.a)("strong",{parentName:"p"},"Background Map"),", to bring up the dialog again. In the ",Object(o.a)("strong",{parentName:"p"},"Fit In")," tab, select 3 nodes that starts with ",Object(o.a)("strong",{parentName:"p"},"FN")," then press the ",Object(o.a)("strong",{parentName:"p"},"Fit In")," button."),Object(o.a)("p",null,Object(o.a)("img",{src:t(137).default})),Object(o.a)("p",null,"Press ",Object(o.a)("strong",{parentName:"p"},"Geographic")," button and the diagram will fit into the map."),Object(o.a)("p",null,"Close the dialog and open ",Object(o.a)("strong",{parentName:"p"},"Page Setup")," dialog."),Object(o.a)("p",null,Object(o.a)("img",{src:t(138).default})),Object(o.a)("p",null,"In the ",Object(o.a)("strong",{parentName:"p"},"Page Size")," tab, press the ",Object(o.a)("strong",{parentName:"p"},"Adjust")," button."),Object(o.a)("p",null,Object(o.a)("img",{src:t(139).default})),Object(o.a)("p",null,"Press ",Object(o.a)("strong",{parentName:"p"},"OK"),"."),Object(o.a)("p",null,Object(o.a)("img",{src:t(140).default})))}p.isMDXComponent=!0}}]);