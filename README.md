# Birthday-Bot

## A WhatsApp bot that wishes friends on their birthdays

---

### Getting Started
1. Clone the repository

```bash
$ git clone https://github.com/rohit1kumar/birthday-bot.git
```

2. Install the dependencies

```bash
$ npm install
```

3. Create a `.env` file in the root directory by copying the contents of `.env.example` Visit [ultramsg](https://www.ultramsg.com) and create an account. You will need to verify your WhatsApp number, then create an instance. Get the instance ID and Token from the instance page and fill them in the `.env` file.

``` bash
$ cp .env.example .env
```

4. Copy the `details.json.example` file to `details.json` and fill in the details of your friends.

```bash
$ cp details.json.example details.json
```

4. Run the bot
```bash
$ npm start
```

---

### Next step ?
Schedule the bot to run everyday at 12:00 AM (IST) using a Github Action.
Workflow file is already present in the repository. Just add your credentials `WA_INSTANCE_ID` & `WA_TOKEN` in the secrets section of the repository settings.

**Note**: `details.json` should be present in the root directory of the repository.
