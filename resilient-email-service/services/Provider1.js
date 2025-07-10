module.exports = {
  sendEmail: async (emailData) => {
    if (Math.random() < 0.7) throw new Error("Provider1 failed");
    return { success: true };
  }
};
