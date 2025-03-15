import json
from dataclasses import dataclass
from typing import List, Optional

@dataclass
class Hero:
    name: str
    type: str
    lore: Optional[List[str]]
    id: int
    pick_rate: Optional[str]
    win_rate: Optional[str]

def load_heroes() -> List[Hero]:
    with open('heroes.json', 'r') as file:
        heroes_data = json.load(file)
    
    heroes = []
    for hero_data in heroes_data:
        hero = Hero(
            name=hero_data["Name"],
            type=hero_data["Type"],
            lore=hero_data["Lore"],
            id=hero_data["Id"],
            pick_rate=hero_data["PickRate"],
            win_rate=hero_data["WinRate"]
        )
        heroes.append(hero)
    
    return heroes

def get_hero_by_name(name: str, heroes: List[Hero]) -> Optional[Hero]:
    for hero in heroes:
        if hero.name == name:
            return hero
    return None

def get_heroes_by_group(group_name: str, heroes: List[Hero]) -> List[Hero]:
    return [hero for hero in heroes if hero.lore and group_name in hero.lore]

# Create global lists for hero groups
def create_hero_groups(heroes: List[Hero]) -> dict:
    return {
        "AVENGERS": [hero.name for hero in heroes if hero.lore and "Avengers" in hero.lore],
        "GOTG": [hero.name for hero in heroes if hero.lore and "Guardians of the Galaxy" in hero.lore],
        "MUTANTS": [hero.name for hero in heroes if hero.lore and "Mutants" in hero.lore],
        "XMEN": [hero.name for hero in heroes if hero.lore and "X-Men" in hero.lore],
        "FF": [hero.name for hero in heroes if hero.lore and "Fantastic Four" in hero.lore]
    } 