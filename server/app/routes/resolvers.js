let leaderBoardService = require("./../services/leaderBoardService");
    leaderBoardService = new leaderBoardService() 
    
module.exports = {

    Query: {
        listRank: () => leaderBoardService.listLeaderBoard()
    },

    Mutation: {
        addLeaderBoard: ( _, params ) => leaderBoardService.saveLeaderBoard( params )
    },

}