import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    MoivesItems: localStorage.getItem("MoivesItems") ? JSON.parse(localStorage.getItem("MoivesItems")) : [],
}

const MovieSlice =  createSlice({

    name:'cart',
    initialState,
    reducers:{

        addTolist (state, action) {
            const itemIndex = state.MoivesItems.findIndex((items) => items.id === action.payload.id);
            if(itemIndex >= 0){
                state.MoivesItems[itemIndex].cartQuantity = 1;
                toast.info("Movie already exist", {
                    position:"bottom-left"
                })
            }else{
                const tempItems = {...action.payload, cartQuantity : 1}
                state.MoivesItems.push(tempItems);
                toast.info("Movie added to mylist", {
                    position:"bottom-left"
                })
            }
            localStorage.setItem("MoivesItems", JSON.stringify(state.MoivesItems));
        }

    }


});

export const { addTolist } = MovieSlice.actions;
export default MovieSlice.reducer;