import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
const publishersUrl = `https://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

export const fetchByCategory = createAsyncThunk(
    "articles/fetchByCategory",
    async (category) => {
        const categoryUrl = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=10&apiKey=${apiKey}`
        const res = await fetch(categoryUrl)
        return res.json()
    }
)
export const fetchByKeyword = createAsyncThunk(
    "articles/fetchByKeyword",
    async (keyword) => {
        const searchUrl = `https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${apiKey}`
        const res = await fetch(searchUrl)
        return res.json()
    }

)
export const fetchByPublisher = createAsyncThunk(
    "articles/fetchByPublisher",
    async (publisher) => {
        const articleUrl = `https://newsapi.org/v2/top-headlines?sources=${publisher}&apiKey=${apiKey}`
        const res = await fetch(articleUrl)
        return res.json()

    }
)
export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        const response = await fetch(url)
        return response.json()
    }
)

export const fetchPublishers = createAsyncThunk(
    "publishers/fetchPublishers",
    async () => {
        const res = await fetch(publishersUrl)
        return res.json()
    }
)

export const articleSlice = createSlice({
    name: "articles",
    initialState: {
        articles: [], loading: false, publishers: [], selectedArticle: {}
    },
    reducers: {
        filter: (state, action) => {

            state.publishers = state.publishers.filter((publisher) => {
                return (publisher.category == action.payload)
            })
        },
        selectArticle: (state, action) => {
            state.selectedArticle = action.payload
        },
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
        })

        builder.addCase(fetchByCategory.fulfilled, (state, action) => {
            state.articles = action.payload.articles
        })

        builder.addCase(fetchByPublisher.fulfilled, (state, action) => {
            state.articles = action.payload.articles
        })
        builder.addCase(fetchByKeyword.fulfilled, (state, action) => {
            state.articles = action.payload.articles

        })
    }
})
export const { filter, selectArticle } = articleSlice.actions;
export default articleSlice.reducer;