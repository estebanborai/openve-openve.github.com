define("faces",["jquery","underscore","text!../templates/face.html","text!../templates/details.html"],function(e,t,n,r){function f(t,n){var r="/json/members.json";i=e(t.faces_target),s=e(t.details_target),o=t.class_name,u=n,e.getJSON(r,l)}function l(e){t.each(e,function(e,t,r){i.append(n({user:e,class_name:o})),t===r.length-1&&(i.on("hover","."+o,c),u&&u())})}function c(){var t=e(this).attr("data-login"),n;a[t]?s.html(r(a[t])):(n="/json/users/"+t+".json",e.getJSON(n,function(e){a[t]={user:e},s.html(r(a[t]))}))}var i,s,o,u,a={};return n=t.template(n),r=t.template(r),{load:f}})