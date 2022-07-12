import eventbus from "@/eventbus/eventbus";
const moduleCart = {
  namespaced: true,
  state() {
    return {
      cartList: [],
    };
  },
  mutations: {
    changeCartList(state, payload) {
      const cartList = state.cartList;
      const index = cartList.findIndex((item) => item.iid === payload.iid);
      if (index === -1) {
        cartList.push(payload);
      } else {
        state.cartList[index].count++;
      }
    },
    changSelect(state, iid) {
      const item = state.cartList.find((item) => item.iid === iid);
      item.isChecked = !item.isChecked;
    },
    changeAllSelect(state) {
      let isAll = this.getters["cart/isAllSeleect"];
      isAll = !isAll;
      state.cartList.forEach((item) => {
        item.isChecked = isAll;
      });
    },
    handleCount(state, palyload) {
      const { type, iid } = palyload;
      const item = state.cartList.find((item) => item.iid === iid);
      if (type === "add") {
        item.count++;
      }
      if (type === "sub") {
        if (item.count === 1) {
          eventbus.$emit("changCover", "最少购买一件哦~");
          return;
        }
        item.count--;
      }
    },
  },
  actions: {
    actionAddGoods({ commit }, payload) {
      // console.log(payload);
      commit("changeCartList", payload);
    },
  },
  getters: {
    resultPrice(state) {
      return state.cartList
        .filter((item) => item.isChecked)
        .reduce((pre, item) => {
          return pre + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    isAllSeleect(state) {
      return state.cartList.every((item) => item.isChecked);
    },
  },
  modules: {},
};

export default moduleCart;
