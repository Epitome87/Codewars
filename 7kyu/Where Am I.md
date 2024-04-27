# [Where Am I?](https://www.codewars.com/kata/560b000f56b4d8be9e000018)

## Description

I forgot what system I'm running on. Can you help me find my hostname?

Each computer has a name associated with it. Your goal is to return a string version (case-sensitive) of the host that your kata code runs on.

## My Solution

**Python**

```py
import platform

def get_pid():
    return platform.node()
```

### User Solution

**Python**

```py
def get_pid():
    import socket
    return socket.gethostname()
```

```py
import os

def get_pid():
    return os.environ['HOSTNAME']
```
