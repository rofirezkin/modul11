import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SteveJobs} from './assets';

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Image source={SteveJobs} style={styles.avatar} />
        </View>
        <Text style={styles.name}>Steven Paul Jobs</Text>
        <Text style={styles.profession}>CEO Apple Inc.</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.biografi}>Biografi</Text>
        <Text style={styles.subDesc}>
          Steven Paul "Steve" Jobs (lahir di San Francisco, California, Amerika
          Serikat, 24 Februari 1955 – meninggal di Palo Alto, California,
          Amerika Serikat, 5 Oktober 2011 pada umur 56 tahun) adalah seorang
          tokoh bisnis dan penemu dari Amerika Serikat. Ia adalah pendiri
          pendamping, ketua, dan mantan CEO Apple Inc. Jobs juga sebelumnya
          menjabat sebagai pejabat eksekutif Pixar Animation Studios; ia menjadi
          anggota dewan direktur The Walt Disney Company pada tahun 2006,
          setelah pengambilan alih Pixar oleh Disney. Namanya dicantumkan
          sebagai produser eksekutif dalam film Toy Story tahun 1995.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Bengkel Pemrograman')}>
        <Text style={styles.textButton}>Kunjungi Lebih Jauh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E9FEFF',
  },
  container: {
    paddingTop: 40,
    alignContent: 'center',

    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#7D8797',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    textAlign: 'center',
    color: '#7D8797',
  },
  desc: {
    marginTop: 40,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#CFFCFF',
    borderRadius: 10,
  },
  subDesc: {
    color: '#7D8797',
    paddingTop: 5,
    textAlign: 'justify',
  },
  biografi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#112340',
    borderBottomColor: '#BCBCBC',
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4BBCC3',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 4,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#D7F0F2',
  },
});
