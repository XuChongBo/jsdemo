        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

                var r = getParameterByName('r');
                var t = getParameterByName('t');
                var thecase = []
                for (var i in type_list){
                  alert(type_list[i]);
                  thecase.append({'t':type_list[i], "url":"/image"+'/'+msg.job_name+'/'+ type_list[i] +'/'+msg.key_name)});
                }
