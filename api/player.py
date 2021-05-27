class player:
    def __init__(self, name, fieldGoalPercentage, threePointPercentage, 
        fieldGoalsTaken, threePointsMade, rebounds, blocks, steals):
        self.ball = False
        self.simPoints = 0

        self.name = name
        self.fieldGoalPercentage = fieldGoalPercentage
        self.threePointPercentage = threePointPercentage
        self.fieldGoalsTaken = fieldGoalsTaken
        self.threePointsMade = threePointsMade
        self.rebounds = rebounds
        self.blocks = blocks
        self.steals = steals