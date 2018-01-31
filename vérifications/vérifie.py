# -*- coding: utf-8 -*-
import json
from jsonschema import validate as valide


def verifie_ordre(mots):
    for (a, b) in zip(mots, mots[1:]):
        mot_a = a['anglais'].lower()
        mot_b = b['anglais'].lower()
        msg = "%s et %s ne sont pas dans le bon ordre" % (mot_a, mot_b)
        assert mot_a < mot_b, msg


def principal():
    with open('traductions.json') as f:
        d = json.load(f)
    with open('vérifications/schéma.json') as f:
        schema = json.load(f)
    valide(d, schema)
    verifie_ordre(d['mots'])


if __name__ == '__main__':
    principal()
