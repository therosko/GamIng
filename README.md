<img src="https://nm.wu.ac.at/nm/download/file/en:gaming/logo?geometry=50x50?revision_id=1870807" width="200">

## General
GamIng (Gamification for Teaching and Learning) is a small project funded by the vice-rector for Academic Programs and Student Affairs at the [Vienna University of Business and Economics (WU)](https://www.wu.ac.at) and conducted by the [Institute of Information Systems and New Media](https://nm.wu.ac.at/nm/) in 2019-2020. The project's goal is to develop a prototype of a serious game for learning. The targeted course is on the subject of Business Information Systems (BIS). BIS is a course taken by most students of the univerisy in the first or second year of their Bachelors.

The initial prototype of the game has been created based on a requirement analysis and a workshop with students, who have previously taken the BIS course. It serves as a "proof of concept" and will be used for further workshops and evaluations.

Author:[Rositsa Ivanova](mailto:rositsa.ivanova@wu.ac.at?subject=[GitHub]%20GamIng)

Acknowledgements: Please check the `licenses_info` file for the list of projects I have used and adapted for parts of the project. Thanks to all those, who publish their work using a license, which allows the reuse and modification of their code. Note that the creation of this application has educational purposes.

## App
The app has been created using NativeScript + Angular. Each individual page of the prototype can be found in an separate folder within the `app` folder. 

All dependencies are describen in the `package.json` file. 

## Development environment

These instructions describe how to get the project running for testing and development purposes.

#### Prerequisites

- [VSCode](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/get-started)
- An Android/iOS device, or an Emulator/SDK such as [Genymotion](https://www.genymotion.com/)

A VSCode devcontainer configuration file is provided in this repository, which contains all the necessary packages to get you started with development. For more information about how to use devcontainers in VSCode, read the [Developing inside a container](https://code.visualstudio.com/docs/remote/containers) 

1. Start VSCode and execute "Remote-Containers: Clone Repository in Container Volume" from the command palette.
2. Clone this repository
3. It should automatically load the .devcontainer/devcontainer.json configuration file. The .devcontainer is using [scratchy/nativescript-cli](https://bitbucket.org/scratchy2/nativescript-cli/src/master/)

You can use --network-host if you want to easily connect to an android emulator running on your local PC. On Linux systems, you can mount the usb port inside of the container and connect a real device by mounting the /dev/bus/usb as a volume inside the container. 

4. Connect to an Android/iOS device by executing "tns devices". This will scan connected devices and you will be able to use tns commands to deploy to them. If you want to connect to a networked device or an emulator you may need to specify the IP address first. To connect to a Genymotion Android emulator for instance, find out its IP adress and then execute: `adb connect <IP_address>` to establish the connection. You are then able to use the `tns` commands.
5. `tns debug android`(ios) 
