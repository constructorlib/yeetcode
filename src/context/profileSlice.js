import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const questionList = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
  },
  {
    id: 3,
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: "Apple",
  },
  {
    id: 4,
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: "7",
  },
];

export const init = createAsyncThunk("profile/init", async (payload) => {
  return { ...payload };
});

export const enableReverb = createAsyncThunk("profile/reverb", async () => {});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    questionList,
    currentQuestion: 0,
    wrongQuestionList: [],
    end: false,
    score: 0,
    isCorrect: null,
  },
  reducers: {
    start(state) {},
    stop(state) {
      state.end = true;
    },
    next(state) {
      state.currentQuestion++;
      state.isCorrect = null;
    },

    check(state, action) {
      console.log(state);
      const { answer } = action.payload;
      const { currentQuestion, questionList } = state;
      const correctAnswer = questionList[currentQuestion].answer;
      if (answer === correctAnswer) {
        state.score++;
        state.isCorrect = true;
      } else {
        state.isCorrect = false;
        state.wrongQuestionList.push(currentQuestion);
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(init.pending, (state) => {
  //         return {
  //           ...state,
  //           player: {
  //             ...state.player,
  //             init: false,
  //             playing: false,
  //             time: 0,
  //             duration: 0,
  //             status: "pending",
  //           },
  //           audio: null,
  //         };
  //       })
  //       .addCase(init.rejected, (state, action) => {
  //         console.error(action?.error);
  //         return {
  //           ...state,
  //           player: {
  //             ...state.player,
  //             init: false,
  //             playing: false,
  //             time: 0,
  //             duration: 0,
  //             status: "rejected",
  //           },
  //           audio: null,
  //         };
  //       })
  //       .addCase(init.fulfilled, (state, action) => {
  //         return {
  //           ...state,
  //           player: {
  //             ...state.player,
  //             init: true,
  //             playing: true,
  //             time: 0,
  //             duration: action?.payload?.duration,
  //             status: "fulfilled",
  //           },
  //           audio: action.payload,
  //         };
  //       });
  //   },
});

// Action creators are generated for each case reducer function
export const { start, stop, next, check } = profileSlice.actions;

// export { init, enableReverb };
export default profileSlice.reducer;
