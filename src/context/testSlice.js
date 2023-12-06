import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { boy1, boy3, boy4, boy5, girl2 } from "assets/icons/";

const questionList = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
    icon: boy1,
  },
  {
    id: 2,
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Elon Musk",
    icon: boy3,
  },
  {
    id: 3,
    question: "The iPhone was created by which company?",
    options: ["Apple", "Intel", "Amazon", "Microsoft"],
    answer: "Apple",
    icon: boy4,
  },
  {
    id: 4,
    question: "How many Harry Potter books are there?",
    options: ["1", "4", "6", "7"],
    answer: "7",
    icon: boy5,
  },
];

export const init = createAsyncThunk("test/init", async (payload) => {
  return { ...payload };
});

export const enableReverb = createAsyncThunk("test/reverb", async () => {});

export const testSlice = createSlice({
  name: "test",
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
      if (state.currentQuestion === state.questionList.length - 1) {
        state.end = true;
        return;
      }

      state.currentQuestion++;
      state.isCorrect = null;
    },

    check(state, action) {
      const { currentQuestion, questionList } = state;
      const correctAnswer = questionList[currentQuestion].answer;
      if (action.payload === correctAnswer) {
        state.score++;
        state.isCorrect = true;
      } else {
        state.isCorrect = false;
        console.log(state.wrongQuestionList);
        console.log(currentQuestion);
        state.wrongQuestionList = [...state.wrongQuestionList, currentQuestion];
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
export const { start, stop, next, check } = testSlice.actions;

// export { init, enableReverb };
export default testSlice.reducer;
