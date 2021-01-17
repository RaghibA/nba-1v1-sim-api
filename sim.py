import random
import time

class player:
    def __init__(self, name, ppg, fg, tp, fgt, tpt, rb, bk, st):
        self.ball = False
        self.name = name
        self.ppg = ppg
        self.fg = fg
        self.tp = tp
        self.fgt = fgt
        self.tpt = tpt
        self.rb = rb
        self.bk = bk
        self.st = st

# sim        
def play(p1, p2):
    # scores
    p1p = 0
    p2p = 0

    # shoot for ball
    ballFirst = -1
    shot = False

    while shot != True:
        # p1 shoot for ball [3 pointer]
        if p1.ball == False:
            c = random.randrange(101)
            if c < p1.tp * 100:
                print(p1.name + ' made the shot')
                shot = True
                p1.ball = True
                ballFirst = 1
            else:
                print(p1.name + ' shot and missed')
        time.sleep(1)
        # p2 shoot for ball [3 pointer]
        if p1.ball == False:
            c = random.randrange(101)
            if c < p2.tp * 100:
                print(p2.name + ' made the shot')
                shot = True
                p2.ball = True
                ballFirst = 2
            else:
                print(p2.name + ' shot and missed')
        time.sleep(1)
        
    if ballFirst is 1:
        print(p1.name + ' gets ball first')
        p1.ball = True
    else:
        print(p2.name + ' gets ball first')
        p2.ball = True

    if p1.ball == True:
        player1 = p1
        player2 = p2
    else: 
        player1 = p2
        player2 = p1

    # sim
    # while p1p < 21 or p2p < 21:
    #     s = random.randrange(101)
    #     if s < player1.fg * 100:
    #         p1p +=1
        


lbj = player('Lebron', 27, .5, .34, 19.6, 4.3, 7.4, .8, 1.6)
kobe = player('Kobe', 25, .447, .329, 19.5, 4.1, 5.2, .5, 1.4)

play(lbj, kobe)

