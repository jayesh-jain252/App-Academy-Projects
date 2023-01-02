def parse(val):
    base_num = {"I":1,"V":5,"X":10, "L":50, "C":100, "D":500, "M":1000}

    hindi_numeral = 0
    i = 0
    while i < len(val):
        if (i+1 < len(val) and base_num[val[i]] < base_num[val[i+1]]):
            hindi_numeral += base_num[val[i+1]] - base_num[val[i]]
            i += 2
            continue

        hindi_numeral += base_num[val[i]]
        i += 1

    return hindi_numeral
