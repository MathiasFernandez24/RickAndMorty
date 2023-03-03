export const API_RM = {
    URL: "https://rickandmortyapi.com/api",
    CHARACTERS_MATHI: "https://rickandmortyapi.com/api/character",

    CHARACTERS: function (page) {
        return (`${this.URL}/character?page=${page}`)
    },
    // CHARACTERS: function () {
    //     return (`${this.URL}/character`)
    // },

    CHARACTER_BY_ID: function (id) {
        return (`${this.CHARACTERS_MATHI}/${id}`)
    },


}