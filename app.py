from sim import Simulation
from player import player

def __main__():
    lbj = player('Lebron', 27, .5, .34, 19.6, 4.3, 7.4, .8, 1.6)
    kobe = player('Kobe', 25, .447, .329, 19.5, 4.1, 5.2, .5, 1.4)

    sim = Simulation(lbj,kobe,21)
    sim.play()

if __name__ == '__main__':
    __main__()