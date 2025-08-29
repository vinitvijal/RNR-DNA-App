import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const jobs = [
  {
    id: '1',
    name: 'Sachin Gupta',
    code: '#SG4343',
    jobId: '#JOBID',
    job: 'PTP',
    location: 'Location',
    avatar: require('../assets/images/partial-react-logo.png'),
    type: 'ongoing',
  },
  {
    id: '2',
    name: 'Sachin Gupta',
    code: '#SG4343',
    jobId: '#JOBID',
    job: 'Deepclean',
    location: 'Location',
    avatar: require('../assets/images/react-logo.png'),
    type: 'upcoming',
    date: 'Date',
    time: 'Time',
  },
  {
    id: '3',
    name: 'Sachin Gupta',
    code: '#SG4343',
    jobId: '#JOBID',
    job: 'Deepclean',
    location: 'Location',
    avatar: require('../assets/images/react-logo.png'),
    type: 'upcoming',
    date: 'Date',
    time: 'Time',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../assets/images/react-logo.png')} style={styles.profilePic} />
          <View>
            <Text style={styles.profileName}>Raghav Jha</Text>
            <Text style={styles.online}>Online</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={24} color="#222" />
            <View style={styles.badge}><Text style={styles.badgeText}>2</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="person-outline" size={24} color="#222" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 32 }}>
        <Text style={styles.sectionTitle}>Ongoing Jobs</Text>
        {jobs.filter(j => j.type === 'ongoing').map(job => (
          <View key={job.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Image source={job.avatar} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardName}>{job.name}</Text>
                <Text style={styles.cardCode}>{job.code}</Text>
                <Text style={styles.cardCode}>{job.jobId}</Text>
                <Text style={styles.cardJob}>Job : {job.job}</Text>
              </View>
              <Ionicons name="location-outline" size={20} color="#888" />
              <Text style={styles.cardLocation}>{job.location}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.sectionTitle}>Upcoming Jobs</Text>
        {jobs.filter(j => j.type === 'upcoming').map(job => (
          <View key={job.id} style={styles.card}>
            <View style={styles.cardRow}>
              <Image source={job.avatar} style={styles.avatar} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cardName}>{job.name}</Text>
                <Text style={styles.cardCode}>{job.code}</Text>
                <Text style={styles.cardCode}>{job.jobId}</Text>
                <Text style={styles.cardJob}>Job : {job.job}</Text>
                <View style={styles.rowInfo}>
                  <Text style={styles.cardInfo}>{job.date}</Text>
                  <Text style={styles.cardInfo}>{job.time}</Text>
                </View>
              </View>
              <Ionicons name="location-outline" size={20} color="#888" />
              <Text style={styles.cardLocation}>{job.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  online: {
    color: '#1DB954',
    fontSize: 13,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginLeft: 16,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#FF5200',
    borderRadius: 8,
    paddingHorizontal: 4,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#888',
    marginTop: 18,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  cardCode: {
    color: '#888',
    fontSize: 12,
  },
  cardJob: {
    color: '#222',
    fontSize: 13,
    marginTop: 2,
    marginBottom: 2,
  },
  cardLocation: {
    color: '#888',
    fontSize: 12,
    marginLeft: 4,
  },
  rowInfo: {
    flexDirection: 'row',
    marginTop: 4,
  },
  cardInfo: {
    color: '#888',
    fontSize: 12,
    marginRight: 12,
  },
});
