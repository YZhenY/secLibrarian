#! /bin/bash
nodepath=$(which node)
sudo setcap 'cap_net_bind_service=+ep' $nodepath