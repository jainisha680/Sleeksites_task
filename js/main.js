$(document).ready(function() {
    $(".fancybox").fancybox({
        type: 'iframe',
        beforeLoad: function() {
            var caption = this.element.attr('data-caption');
            this.tpl.wrap = '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div><p>'+caption+'</p></div></div></div>'

        },

        helpers:  {
            title : {
                type : 'inside',
                position: 'top'
            }
        }
    });
});
