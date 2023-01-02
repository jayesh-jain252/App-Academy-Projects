import random
# Your code here
def chat():
    coworkers = ["Jack", "Lenny", "Michelle", "Andrea"];
    chatee = random.choice(coworkers)
    print("Chatting with " + chatee + "...")
    print("Done")

def getWater():
    print("Getting water...")
    print("That was refreshing.")

def useSocialMedia():
    socialMedia = ["FaceBook", "Twitter", "YouTube", "Reddit"]
    choiceSocial = random.choice(socialMedia)
    print("Using " + choiceSocial + "...")
    print("Done")
