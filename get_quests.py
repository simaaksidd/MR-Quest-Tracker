import json
from collections import defaultdict

'''
ISSUES:
1) when working with location-locked heroes, the hero reward is counting even though the hero is not on the correct map (this is bc the program is only looking for the hero)
2) when working on heros with partner-locked heroes, the hero reward is counting even though the hero is not with the correct team (this is bc the program is only looking for the hero)
3) for groups of heroes like avenger, xmen, mutants, etc. The program doesnt work for those yet. 
4) I want to abbreviate character and location names so i do not have to type it all out
5) make gui ? Make full app for future cheergi
'''

AVENGERS  = []
GOTG = []
MUTANTS = []
LOCATIONS = []


def calculate_potential_points(quests, teammates, location, enemies):
    hero_scores = defaultdict(lambda: {"points": 0, "quests": []})
    
    for quest in quests:
        hero = quest["hero"]
        points = quest["reward"]
        questline = quest["questline"]
        
        # Get all conditions from the quest
        conditions = {
            "partner": quest.get("partner"),
            "location": quest.get("location"),
            "enemy": quest.get("enemy")
        }
        
        # Check if all conditions are met
        conditions_met = True
        
        # If there are no conditions at all, only check if hero isn't in teammates
        if not any(conditions.values()):
            if hero not in teammates:
                hero_scores[hero]["points"] += points
                hero_scores[hero]["quests"].append(questline)
            continue
            
        # Check each condition
        if conditions["partner"] and conditions["partner"] not in teammates:
            conditions_met = False
        if conditions["location"] and conditions["location"] != location:
            conditions_met = False
        if conditions["enemy"] and conditions["enemy"] not in enemies:
            conditions_met = False
            
        # If all conditions are met and hero isn't in teammates, add points
        if conditions_met and hero not in teammates:
            hero_scores[hero]["points"] += points
            hero_scores[hero]["quests"].append(questline)
    
    # Sort heroes by total points in descending order
    sorted_heroes = sorted(hero_scores.items(), key=lambda x: x[1]["points"], reverse=True)
    return {hero: data for hero, data in sorted_heroes}

def main():
    teammates = ["Spider-Man", "Iron Man", "Hela", "Luna Snow", "Doctor Strange"]
    location = "Yggsgard: Yggdrasill Path"
    enemies = ["Hulk", "Namor", "Thor", "Magneto", "The Thing", "Captain America"]
    
    with open('quests.json', 'r') as file: 
        quest_data = json.load(file)

    result = calculate_potential_points(quest_data, teammates, location, enemies)


    with open("result.json", "w") as f:
        json.dump(result, f, indent=2)

if __name__ == "__main__":
    main()