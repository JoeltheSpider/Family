# Family
Track your family members, discover family trees, explore degrees of separation.

## For devs

### Pre-requisites

1) Install Android studio
2) Include 2 new env variables:
    - ANDROID_HOME: C:\Users\<<username>>\AppData\Local\Android\Sdk
    - JAVA_HOME: <<path to android studio>>\jre
    - In addition to that add 
        C:\Users\<<username>>\AppData\Local\Android\Sdk\platform-tools
    to path env variable. (We need that for easily checking devices connected across adb - device for testing our app)

### Starting app

1) Start metro:
    - cd ./family_app
    - npx react-native start
2) Start app
    - cd ./family_app
    - npx react-native run-android