module.exports = {
  sendEmail: async (emailData) => {
    if (Math.random() < 0.5) throw new Error("Provider2 failed");
    return { success: true };
  }
};