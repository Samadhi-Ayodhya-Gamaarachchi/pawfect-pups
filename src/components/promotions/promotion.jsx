import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { MessageText, PromotionContainer } from "../../styles/promotions/promotionsIndex";
import { Slide } from "@mui/material";

const messages=[
    "Meet your new best friend! ",
   " A New Friend is Waiting for You!",
   "Your Future Best Friend is Just a Click Away!"
    
];

export default function Promotions(){
    const [messageIndex, setMessageIndex]=useState(0)
    const [show,setShow]=useState(true)
    useEffect(() => {

        setTimeout(()=>{
            setShow(false)
        },3000);
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setShow(true);
            setTimeout(()=>{
                setShow(false)
            },3000);
        }, 4000);

        return()=>{
            clearInterval(interval);
        }
    
    });

    return (
        <>
        <PromotionContainer>
            <Slide
            direction={show? "left":"right"}
            in={show}
            timeout={{
                enter:500,
                exit:100
            }}
            >
            <Box dispaly={"flex"} justifyContent="center" alignItems={"center"}>
                <MessageText>
                    {messages[messageIndex]}
                </MessageText>
            </Box>
            </Slide>
        </PromotionContainer>

        
        </>
    );

}