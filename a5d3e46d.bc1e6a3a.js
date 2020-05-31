(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{167:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return d})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return b}));var c=t(2),n=t(6),o=(t(0),t(205)),a={id:"docker-install",title:"\u5b89\u88c5Docker",sidebar_label:"\u5b89\u88c5Docker"},d={id:"docker-install",title:"\u5b89\u88c5Docker",description:"1. Centos7\u5b89\u88c5Docker",source:"@site/docs/docker-install.md",permalink:"/docs/docker-install",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docker-install.md",sidebar_label:"\u5b89\u88c5Docker",sidebar:"someSidebar",previous:{title:"\u5b89\u88c5Puppet",permalink:"/docs/puppet-install"},next:{title:"Docker\u5e38\u7528\u547d\u4ee4",permalink:"/docs/docker-cmd"}},i=[{value:"1. Centos7\u5b89\u88c5Docker",id:"1-centos7\u5b89\u88c5docker",children:[{value:"1.1. \u5378\u8f7d\u65e7docker",id:"11-\u5378\u8f7d\u65e7docker",children:[]},{value:"1.2. \u5b89\u88c5docker\u524d\u63d0\u7ec4\u4ef6",id:"12-\u5b89\u88c5docker\u524d\u63d0\u7ec4\u4ef6",children:[]},{value:"1.3. \u542f\u7528docker\u7a33\u5b9a\u5e93",id:"13-\u542f\u7528docker\u7a33\u5b9a\u5e93",children:[]},{value:"1.4. \u5b89\u88c5docker",id:"14-\u5b89\u88c5docker",children:[]},{value:"1.5. \u5f00\u673a\u542f\u52a8\u4e0e\u542f\u52a8\u670d\u52a1",id:"15-\u5f00\u673a\u542f\u52a8\u4e0e\u542f\u52a8\u670d\u52a1",children:[]},{value:"1.6. \u81ea\u52a8\u8865\u9f50\u529f\u80fd",id:"16-\u81ea\u52a8\u8865\u9f50\u529f\u80fd",children:[]}]},{value:"2. Debian",id:"2-debian",children:[{value:"2.1. \u6dfb\u52a0\u8f6f\u4ef6\u6e90\u7684 GPG \u5bc6\u94a5",id:"21-\u6dfb\u52a0\u8f6f\u4ef6\u6e90\u7684-gpg-\u5bc6\u94a5",children:[]},{value:"2.2. \u6dfb\u52a0 Docker CE \u8f6f\u4ef6\u6e90",id:"22-\u6dfb\u52a0-docker-ce-\u8f6f\u4ef6\u6e90",children:[]},{value:"2.3. \u5b89\u88c5docker-ce",id:"23-\u5b89\u88c5docker-ce",children:[]}]},{value:"3. Docker \u4f7f\u7528\u56fd\u5185\u6e90",id:"3-docker-\u4f7f\u7528\u56fd\u5185\u6e90",children:[{value:"3.1. \u7f16\u8f91docker\u914d\u7f6e\u6587\u4ef6",id:"31-\u7f16\u8f91docker\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"3.2. \u91cd\u542f\u670d\u52a1",id:"32-\u91cd\u542f\u670d\u52a1",children:[]},{value:"3.3. \u9a8c\u8bc1\u662f\u5426\u751f\u6548",id:"33-\u9a8c\u8bc1\u662f\u5426\u751f\u6548",children:[]}]},{value:"4. \u5b89\u88c5docker-compose",id:"4-\u5b89\u88c5docker-compose",children:[]},{value:"5. \u5b89\u88c5docker\u53ef\u89c6\u5316",id:"5-\u5b89\u88c5docker\u53ef\u89c6\u5316",children:[]},{value:"6. Docker\u5e38\u7528\u547d\u4ee4",id:"6-docker\u5e38\u7528\u547d\u4ee4",children:[]}],l={rightToc:i};function b(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(c.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-centos7\u5b89\u88c5docker"},"1. Centos7\u5b89\u88c5Docker"),Object(o.b)("h3",{id:"11-\u5378\u8f7d\u65e7docker"},"1.1. \u5378\u8f7d\u65e7docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"sudo yum -y remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n")),Object(o.b)("h3",{id:"12-\u5b89\u88c5docker\u524d\u63d0\u7ec4\u4ef6"},"1.2. \u5b89\u88c5docker\u524d\u63d0\u7ec4\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"sudo yum -y install yum-utils \\\n    device-mapper-persistent-data \\\n  lvm2\n")),Object(o.b)("h3",{id:"13-\u542f\u7528docker\u7a33\u5b9a\u5e93"},"1.3. \u542f\u7528docker\u7a33\u5b9a\u5e93"),Object(o.b)("p",null,"\u4f7f\u7528\u963f\u91ccdocker\u5e93yum\u6e90"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"sudo yum-config-manager \\\n  --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")),Object(o.b)("h3",{id:"14-\u5b89\u88c5docker"},"1.4. \u5b89\u88c5docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"sudo yum -y install docker-ce docker-ce-cli containerd.io\n")),Object(o.b)("h3",{id:"15-\u5f00\u673a\u542f\u52a8\u4e0e\u542f\u52a8\u670d\u52a1"},"1.5. \u5f00\u673a\u542f\u52a8\u4e0e\u542f\u52a8\u670d\u52a1"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"sudo systemctl enable docker\nsudo systemctl start docker\n")),Object(o.b)("h3",{id:"16-\u81ea\u52a8\u8865\u9f50\u529f\u80fd"},"1.6. \u81ea\u52a8\u8865\u9f50\u529f\u80fd"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"centos7\u5b89\u88c5\u81ea\u52a8\u8865\u5168\u8f6f\u4ef6\u5305,\u8fd9\u6837docker\u5c31\u53ef\u4ee5\u81ea\u52a8\u8865\u5168,\u91cd\u65b0\u767b\u9646shell\u624d\u80fd\u751f\u6548")),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"yum -y install bash-completion\n")),Object(o.b)("h2",{id:"2-debian"},"2. Debian"),Object(o.b)("h3",{id:"21-\u6dfb\u52a0\u8f6f\u4ef6\u6e90\u7684-gpg-\u5bc6\u94a5"},"2.1. \u6dfb\u52a0\u8f6f\u4ef6\u6e90\u7684 GPG \u5bc6\u94a5"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/debian/gpg | sudo apt-key add -\n")),Object(o.b)("h3",{id:"22-\u6dfb\u52a0-docker-ce-\u8f6f\u4ef6\u6e90"},"2.2. \u6dfb\u52a0 Docker CE \u8f6f\u4ef6\u6e90"),Object(o.b)("p",null,"\u7528\u7684aliyun\u955c\u50cf\uff0c\u8fd9\u6837\u7684\u597d\u5904\u4f60\u61c2\u7684\u3002"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"add-apt-repository"),"\u547d\u4ee4\u7531apt-file\u5305\u63d0\u4f9b\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),'apt-get install apt-file\nadd-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/debian $(lsb_release -cs) stable"\n')),Object(o.b)("h3",{id:"23-\u5b89\u88c5docker-ce"},"2.3. \u5b89\u88c5docker-ce"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"apt-get update\napt-get install docker-ce\napt-file update\n")),Object(o.b)("h2",{id:"3-docker-\u4f7f\u7528\u56fd\u5185\u6e90"},"3. Docker \u4f7f\u7528\u56fd\u5185\u6e90"),Object(o.b)("h3",{id:"31-\u7f16\u8f91docker\u914d\u7f6e\u6587\u4ef6"},"3.1. \u7f16\u8f91docker\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),'sudo cat > /etc/docker/daemon.json <<EOF\n{\n"registry-mirrors": [\n"https://kfwkfulq.mirror.aliyuncs.com",\n"https://2lqq34jg.mirror.aliyuncs.com",\n"https://pee6w651.mirror.aliyuncs.com",\n"https://registry.docker-cn.com",\n"http://hub-mirror.c.163.com"\n],\n"dns": ["8.8.8.8","8.8.4.4"]\n}\nEOF\n')),Object(o.b)("h3",{id:"32-\u91cd\u542f\u670d\u52a1"},"3.2. \u91cd\u542f\u670d\u52a1"),Object(o.b)("p",null,"\u91cd\u542f\u670d\u52a1\u56fd\u5185\u6e90\u624d\u80fd\u751f\u6548"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"systemctl daemon-reload\nsystemctl restart docker\n")),Object(o.b)("h3",{id:"33-\u9a8c\u8bc1\u662f\u5426\u751f\u6548"},"3.3. \u9a8c\u8bc1\u662f\u5426\u751f\u6548"),Object(o.b)("p",null,"\u9a8c\u8bc1\u662f\u5426\u751f\u6548\uff0c\u6709\u8f93\u51fahttps\u5730\u5740\u8868\u793a\u5df2\u751f\u6548"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),'root@localhost# docker info | grep -A 6 "Registry Mirrors"\n Registry Mirrors:\n  https://kfwkfulq.mirror.aliyuncs.com/\n  https://2lqq34jg.mirror.aliyuncs.com/\n  https://pee6w651.mirror.aliyuncs.com/\n  https://registry.docker-cn.com/\n  http://hub-mirror.c.163.com/\n  https://dockerhub.azk8s.cn/\n')),Object(o.b)("h2",{id:"4-\u5b89\u88c5docker-compose"},"4. \u5b89\u88c5docker-compose"),Object(o.b)("p",null,"docker-compose\u662f\u5bb9\u5668\u7f16\u6392\u5de5\u5177"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"yum -y install epel-release\nyum -y install docker-compose\n")),Object(o.b)("h2",{id:"5-\u5b89\u88c5docker\u53ef\u89c6\u5316"},"5. \u5b89\u88c5docker\u53ef\u89c6\u5316"),Object(o.b)("p",null,"\u7fa4\u8f89\u7684docker\u53ef\u89c6\u5316\u8fd8\u662f\u633a\u4e0d\u9519\u7684\uff0c\u8fd9\u4e2aportainer\u8fd8\u662f\u6709\u70b9\u6b20\u7f3a~~~"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"docker run -d -p 9000:9000 \\\n    --restart=always \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    --name prtainer-test \\\n    portainer/portainer\n")),Object(o.b)("h2",{id:"6-docker\u5e38\u7528\u547d\u4ee4"},"6. Docker\u5e38\u7528\u547d\u4ee4"),Object(o.b)("pre",null,Object(o.b)("code",Object(c.a)({parentName:"pre"},{}),"docker version\ndocker images\ndocker ps -a\ndocker rm xxx\ndocker rmi xxx\ndocker stop xxx\ndocker kill xxx\ndocker run -it --restart=always\nsystemctl enable docker\nsystemctl status docker\nservice docker start\nservice docker restart\nservice docker stop\ndocker exec -it mysql-5.6 /bin/bash\n")))}b.isMDXComponent=!0},205:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return k}));var c=t(0),n=t.n(c);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,c,n=function(e,r){if(null==e)return{};var t,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)t=o[c],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)t=o[c],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),b=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=b(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var t=e.components,c=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(t),u=c,k=p["".concat(a,".").concat(u)]||p[u]||s[u]||o;return t?n.a.createElement(k,d(d({ref:r},l),{},{components:t})):n.a.createElement(k,d({ref:r},l))}));function k(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var o=t.length,a=new Array(o);a[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:c,a[1]=d;for(var l=2;l<o;l++)a[l]=t[l];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);