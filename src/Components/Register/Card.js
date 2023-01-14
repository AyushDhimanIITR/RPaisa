import "./cards.css";
const Cards = () => {
    // document.addEventListener('mousemove', function(event){
    //     let card_x = getTransformValue(event.clientX,window.innerWidth,56);
    //     let card_y = getTransformValue(event.clientY,window.innerHeight,56);
    //     let shadow_x = getTransformValue(event.clientX,window.innerWidth,20);
    //     let shadow_y = getTransformValue(event.clientY,window.innerHeight,20);
    //     let text_shadow_x = getTransformValue(event.clientX,window.innerWidth,28);
    //     let text_shadow_y = getTransformValue(event.clientY,window.innerHeight,28);
    //     {(".floating").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)")};
    //     {(".floating").css("box-shadow",-card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)")};
    //    { (".svg").css("filter","drop-shadow("+-shadow_x+"px "+shadow_y/1+"px 4px rgba(0, 0, 0, .6))")};
    //     {(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)")};
    //   });
    //   function getTransformValue(v1,v2,value){
    //     return ((v1/v2*value-value/2)*1).toFixed(1);                        
    //   }
    //   function = () =>{
    //     setTimeout(function(){
    //       ("body").removeClass("active");
    //     }, 2200);
    //   });
    return (
        <body class="active">
            <div class="floating">
                <div class="thickness"></div>
                <div class="thickness"></div>
                <div class="thickness"></div>
                <div class="card_body">
                    <div class="paypal_center svg"></div>
                    <div class="logo svg"></div>
                    <div class="paywave svg"></div>
                    <div class="chips svg"></div>
                    <div class="card_no text">
                        1234-5678-9012-3456
                    </div>
                    <div class="valid text">
                        VALID <br /> THUR
                    </div>
                    <div class="valid_date text">
                        12/28
                    </div>
                    <div class="holder text">R Paisa</div>
                    <div class="mastercard_icon svg"></div>

                </div>

            </div>
        </body>
    )
}

export default Cards;
