export const updateCounter = amount => {
  return {
    type: "updateCounter",
    amount: amount
  };
};

export const resetCounter = () => {
  return {
    type: "resetCounter",
  };
};

export const resetHistory = () => {
  return {
    type: "resetHistory",
  };
};
