import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://newsapi.org/v2/everything?q=Apple&pageSize=10&apiKey=${apiKey}`;
const publishersUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;
console.log("publishers", publishersUrl)
export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        const response = await fetch(url)
        return response.json()
    }
);

export const fetchPublishers = createAsyncThunk(
    "publishers/fetchPublishers",
    async () => {
        const response = await fetch(publishersUrl)
        console.log("res", response.json())
        return response.json()

    }
)

export const articleSlice = createSlice({
    name: "articles",
    initialState: { articles: [], loading: false, publishers: [] },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchArticles.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchArticles.fulfilled, (state, action) => {
            state.loading = false
            state.articles = action.payload.articles
        }
        )
        builder.addCase(fetchPublishers.fulfilled, (state, action) => {
            state.publishers = action.payload.sources
            console.log("yeee", action.payload)
        })
    }
})
export const { getArticle } = articleSlice.actions;
export default articleSlice.reducer;