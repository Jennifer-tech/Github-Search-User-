import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import githubApi from '../../common/apis/githubApi';

export const fetchAsyncUsers = createAsyncThunk('users/fetchAsyncUsers', async (term) => {
    
    const response = term && await githubApi
        .get(`/search/users?q=${term}`);
        return response.data;
})

export const fetchAsyncUserDetail = createAsyncThunk('users/fetchAsyncUserDetail', async (id) => {
    const response = await githubApi
        .get(`/search/users?q=${id}`);
        return response.data;
})

const initialState = {
    users: {},
    selectUser: {},
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
       addUsers: (state, { payload }) =>{
        state.users = payload;
        },
    },
    extraReducers: {
        [fetchAsyncUsers.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
            console.log('fetched successfully!');
            return {...state, users: payload};
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncUserDetail.fulfilled]: (state, {payload}) => {
            console.log('fetched successfully!');
            return {...state, selectUser: payload};
        },
    },
});

export const { addUsers } = userSlice.actions;
export const getAllUsers = (state) => state.users.users;
export const getSelectedUsers = (state) => state.users.selectUser;
export default userSlice.reducer;