import json
filestorage = 'data/info.txt'
def save(id, contents):
    data = {
        id: contents
    }
    with open(filestorage, 'a+') as f:
        f.write(json.dumps(data))
        f.write('\n')

def readall():
    emptydict = {}
    with open (filestorage, 'r') as f:
        lines = f.readlines() 
        for i in lines:
            emptydict.update(json.loads(i))
    return emptydict

def search(key):
    results = readall()
    return results.get(key)

if __name__ == "__main__":
    #save("fee4", "fi200")
    #print(readall())
    print(search('fee'))
    