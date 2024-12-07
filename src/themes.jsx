export const getDesginTokens =(mode)=>({
    palette:{
        mode,
        ...(mode === "light"
        ?{

        }
        :{

        }),
    },
});