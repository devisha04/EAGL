from twilio.rest import Client
import random

account_sid = ''
auth_token = ''
client = Client(account_sid, auth_token)

otp = str(round(random.random()*100000))
print(otp)

message = client.messages.create(
  from_='+14848015109',
  body='Share this OTP: '+otp,
  to='+919999367202'
)

print(message.sid)

