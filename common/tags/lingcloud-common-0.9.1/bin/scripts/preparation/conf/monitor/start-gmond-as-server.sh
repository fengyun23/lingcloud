#!/bin/bash
#
# Copyright (C) 2008-2011,
# LingCloud Team,
# Institute of Computing Technology,
# Chinese Academy of Sciences.
# P.O.Box 2704, 100190, Beijing, China.
#
# http://lingcloud.org
#
GANGLIA_HOME=/monitor/ganglia/home

killall -9 gmond

$GANGLIA_HOME/sbin/gmond -c $GANGLIA_HOME/etc/gmond-server.conf
